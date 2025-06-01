# Voice of Tomorrow Radio

Voice of Tomorrow Radio is a high-fidelity frontend prototype for a next-generation virtual radio station powered by synthetic voices. Designed to deliver a seamless, engaging user experience, it simulates a 24/7 AI-powered radio platform that combines live-streaming capabilities, community submissions, dynamic scheduling, and voice profile personalization.

The platform envisions integration with the Murf AI streaming API to generate real-time, lifelike voice content, broadcasting user messages, AI-curated segments, and scheduled announcements.

## Project Highlights

- Custom-designed audio player with planned real-time streaming capability
- Current segment display with animated transitions
- Voice queue system for upcoming scheduled content
- Community-driven submission portal for user-generated messages
- Broadcast schedule timeline with a time-based visual interface
- Admin dashboard for content moderation and approval (prototype stage)
- Fully responsive layout with dark/light theme toggle
- Real-time audio visualization with waveform animations (simulated)
- Voice profile gallery for AI speaker customization
- Integration-ready structure for backend APIs and streaming endpoints

## Technology Stack

**Frontend**

- React with TypeScript for scalable component development
- Tailwind CSS for custom theming and responsiveness
- React Router DOM for client-side routing
- Framer Motion for fluid animations
- Lucide React for icon support
- Shadcn/ui for modular UI elements
- Howler.js for advanced audio control
- Recharts for interactive data visualization
- @tanstack/react-query for asynchronous data management

## Directory Structure

```
src/
├── components/
│   ├── AudioPlayer.tsx
│   ├── AudioVisualizer.tsx
│   ├── NowPlaying.tsx
│   ├── SubmitContentForm.tsx
│   ├── VoiceQueue.tsx
│   └── Navigation.tsx
├── pages/
│   ├── Landing.tsx
│   ├── Listen.tsx
│   ├── Submit.tsx
│   ├── Schedule.tsx
│   ├── About.tsx
│   └── Admin.tsx
├── assets/
├── data/
├── utils/
├── App.tsx
└── main.tsx
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gauriagarwal2602/voice-of-tomorrow-radio
   cd voice-of-tomorrow-radio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

## Backend Status

Currently, the project does not include a backend. All features such as the admin dashboard, voice streaming, and scheduling are simulated using static or mock data. Planned backend features include:

- Real-time audio streaming through Murf AI API
- Content management with database integration
- Admin content approval workflows
- Dynamic segment scheduling with cron-based control
- User authentication for submission tracking

## Roadmap

- Integrate Murf AI text-to-speech streaming
- Enable real-time voice playback
- Connect content submission to a live database
- Activate moderation tools in Admin Dashboard
- Expand to multilingual voice content
- Deploy as a PWA for mobile accessibility
- Implement interactive polls or listener engagement segments

## Contributing

Contributions are welcome. Please fork the repository and open a pull request with any improvements or suggestions. Ensure all code follows the existing architecture and naming conventions.

## License

This project is licensed under the MIT License.

## Author

Developed by Gauri Agarwal. For inquiries or collaboration opportunities, visit [github.com/gauriagarwal2602](https://github.com/gauriagarwal2602).