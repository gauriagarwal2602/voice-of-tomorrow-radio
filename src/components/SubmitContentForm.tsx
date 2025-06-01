
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const SubmitContentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    category: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const categories = [
    { value: 'shoutout', label: 'Shoutout' },
    { value: 'thought', label: 'Daily Thought' },
    { value: 'question', label: 'Question for AI' },
    { value: 'announcement', label: 'Event Announcement' },
    { value: 'inspiration', label: 'Inspiration' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.message.trim() || !formData.category) {
      toast({
        title: "Missing Information",
        description: "Please fill in your message and select a category.",
        variant: "destructive"
      });
      return;
    }

    if (formData.message.length > 300) {
      toast({
        title: "Message Too Long",
        description: "Please keep your message under 300 characters.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Submitted!",
        description: "Your message has been queued for broadcast. Check back soon to hear it on-air!",
      });
      
      setFormData({ name: '', message: '', category: '' });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
            Your Name (Optional)
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="How should we credit you?"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-blue-200 mb-2">
            Category *
          </label>
          <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
            Your Message * ({formData.message.length}/300)
          </label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Share your message with our AI radio community..."
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
            maxLength={300}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
        >
          {isSubmitting ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit Message
            </>
          )}
        </Button>
      </form>

      {/* Status Examples */}
      <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
        <h4 className="text-white font-medium mb-3">Message Status Examples:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Birthday message from Sarah</span>
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs">Queued</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Tech tip from Marcus</span>
            <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">On-Air</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-300">Motivation from Alex</span>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Completed</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SubmitContentForm;
