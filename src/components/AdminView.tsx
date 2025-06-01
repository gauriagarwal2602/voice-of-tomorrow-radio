
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Play, Clock, Users, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Submission {
  id: string;
  name: string;
  message: string;
  category: string;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected' | 'live';
  estimatedAirTime?: string;
  reason?: string;
  airTime?: string;
}

const AdminView = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([
    {
      id: '1',
      name: 'Sarah Johnson',
      message: 'Happy birthday to my best friend Maria! Hope you have an amazing day filled with joy and laughter.',
      category: 'Shoutout',
      timestamp: '2 minutes ago',
      status: 'pending',
      estimatedAirTime: '5 minutes'
    },
    {
      id: '2',
      name: 'Anonymous',
      message: 'Remember that every small step forward is progress. Don\'t give up on your dreams!',
      category: 'Inspiration',
      timestamp: '5 minutes ago',
      status: 'approved',
      estimatedAirTime: '8 minutes'
    },
    {
      id: '3',
      name: 'Tech Enthusiast',
      message: 'What do you think about the latest developments in AI? How will it change our daily lives?',
      category: 'Question for AI',
      timestamp: '8 minutes ago',
      status: 'pending',
      estimatedAirTime: '12 minutes'
    },
    {
      id: '4',
      name: 'Community Center',
      message: 'Join us this Saturday for our annual charity drive at the downtown community center from 9 AM to 4 PM.',
      category: 'Event Announcement',
      timestamp: '12 minutes ago',
      status: 'rejected',
      reason: 'Past event date'
    },
    {
      id: '5',
      name: 'Morning Commuter',
      message: 'Traffic is really heavy on Highway 101 this morning. Consider taking alternate routes.',
      category: 'Community Update',
      timestamp: '15 minutes ago',
      status: 'live',
      airTime: 'On air now'
    }
  ]);

  const { toast } = useToast();

  const handleApprove = (id: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: 'approved' as const } : sub
    ));
    toast({
      title: "Message Approved",
      description: "The message has been queued for broadcast.",
    });
  };

  const handleReject = (id: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: 'rejected' as const, reason: 'Content guidelines' } : sub
    ));
    toast({
      title: "Message Rejected",
      description: "The message has been rejected and won't be broadcast.",
      variant: "destructive"
    });
  };

  const handlePushLive = (id: string) => {
    setSubmissions(prev => prev.map(sub => 
      sub.id === id ? { ...sub, status: 'live' as const, airTime: 'On air now' } : sub
    ));
    toast({
      title: "Pushed to Live",
      description: "The message is now broadcasting live!",
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-400" />;
      case 'live':
        return <Play className="w-5 h-5 text-blue-400" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-500/20 text-green-300';
      case 'rejected':
        return 'bg-red-500/20 text-red-300';
      case 'live':
        return 'bg-blue-500/20 text-blue-300';
      default:
        return 'bg-yellow-500/20 text-yellow-300';
    }
  };

  const stats = {
    pending: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    live: submissions.filter(s => s.status === 'live').length,
    total: submissions.length
  };

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
        >
          <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.pending}</div>
          <div className="text-blue-200">Pending Review</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
        >
          <div className="text-3xl font-bold text-green-400 mb-2">{stats.approved}</div>
          <div className="text-blue-200">Approved</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
        >
          <div className="text-3xl font-bold text-blue-400 mb-2">{stats.live}</div>
          <div className="text-blue-200">Live Now</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black/40 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center"
        >
          <div className="text-3xl font-bold text-white mb-2">{stats.total}</div>
          <div className="text-blue-200">Total Today</div>
        </motion.div>
      </div>

      {/* Submissions List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-black/40 backdrop-blur-md rounded-xl p-8 border border-white/20"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <Users className="w-6 h-6 mr-3 text-blue-400" />
            Recent Submissions
          </h2>
          <div className="flex items-center text-blue-300 text-sm">
            <Mic className="w-4 h-4 mr-2" />
            Auto-refresh every 30s
          </div>
        </div>

        <div className="space-y-4">
          {submissions.map((submission, index) => (
            <motion.div
              key={submission.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="p-6 bg-white/5 rounded-lg border border-white/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-white">
                      {submission.name || 'Anonymous'}
                    </h3>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-sm">
                      {submission.category}
                    </span>
                    <span className="text-gray-400 text-sm">{submission.timestamp}</span>
                  </div>
                  <p className="text-blue-200 mb-3 leading-relaxed">{submission.message}</p>
                  
                  {submission.status === 'rejected' && submission.reason && (
                    <p className="text-red-300 text-sm italic">Reason: {submission.reason}</p>
                  )}
                </div>

                <div className="flex items-center space-x-3 ml-4">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(submission.status)}
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  {submission.status === 'live' && submission.airTime ? (
                    <span className="text-blue-300 font-medium">{submission.airTime}</span>
                  ) : submission.estimatedAirTime ? (
                    <span>Estimated air time: {submission.estimatedAirTime}</span>
                  ) : null}
                </div>

                {submission.status === 'pending' && (
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleReject(submission.id)}
                      variant="ghost"
                      size="sm"
                      className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                    <Button
                      onClick={() => handleApprove(submission.id)}
                      variant="ghost"
                      size="sm"
                      className="text-green-400 hover:text-green-300 hover:bg-green-500/10"
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                  </div>
                )}

                {submission.status === 'approved' && (
                  <Button
                    onClick={() => handlePushLive(submission.id)}
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                  >
                    <Play className="w-4 h-4 mr-1" />
                    Push Live
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminView;
