import type { Project, Experience, SkillGroup, Achievement, TimelineEvent } from '../types';

export const PERSONAL_INFO = {
  name: 'Zeel Modh',
  title: 'Senior Android & Flutter Developer',
  subtitle: 'Team Lead & Mobile Architect',
  experienceYears: '4.5+',
  phone: '+91 8155849137',
  email: 'zeelmodh12@gmail.com',
  location: 'Vadodara, Gujarat, India',
  website: 'https://zeelmodh.github.io/zeelmodh-portfolio',
  linkedin: 'https://linkedin.com/in/zeel-modh-48b993217',
  github: 'https://github.com/zeelmodh',
  summary: 'Senior Android & Flutter Developer with 4.5+ years of experience architecting and delivering high-performance, production-grade mobile applications across 20+ Play Store titles with 1.6M+ combined downloads. Experienced team lead who has guided a team of 4 mobile developers — driving sprint planning, code reviews, and on-time delivery. Deep expertise in Java, Kotlin, and Dart/Flutter with strong command of MVVM, Clean Architecture, and scalable design patterns. Skilled at leveraging AI-assisted development workflows (Claude, Cursor, DeepSeek, Gemini) to ship faster without compromising quality.'
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', icon: 'java', level: 'Expert' },
      { name: 'Kotlin', icon: 'kotlin', level: 'Expert' },
      { name: 'Dart (Flutter)', icon: 'dart', level: 'Expert' },
      { name: 'XML', icon: 'xml', level: 'Expert' }
    ]
  },
  {
    category: 'Frameworks',
    skills: [
      { name: 'Android SDK', icon: 'android', level: 'Expert' },
      { name: 'Flutter', icon: 'flutter', level: 'Expert' },
      { name: 'React Native', icon: 'react', level: 'Basic' }
    ]
  },
  {
    category: 'Architecture',
    skills: [
      { name: 'MVVM', icon: 'mvvm', level: 'Expert' },
      { name: 'Clean Architecture', icon: 'clean', level: 'Expert' },
      { name: 'Repository Pattern', icon: 'repository', level: 'Expert' },
      { name: 'MVC', icon: 'mvc', level: 'Advanced' }
    ]
  },
  {
    category: 'Networking & Realtime',
    skills: [
      { name: 'Socket.IO', icon: 'socket', level: 'Expert' },
      { name: 'WebSockets', icon: 'websocket', level: 'Expert' },
      { name: 'Agora RTC/RTM', icon: 'agora', level: 'Expert' },
      { name: 'Retrofit', icon: 'retrofit', level: 'Expert' },
      { name: 'REST APIs', icon: 'rest', level: 'Expert' },
      { name: 'OkHttp / Volley', icon: 'okhttp', level: 'Expert' }
    ]
  },
  {
    category: 'Database & Cloud',
    skills: [
      { name: 'Room DB', icon: 'room', level: 'Expert' },
      { name: 'SQLite', icon: 'sqlite', level: 'Expert' },
      { name: 'Firebase Realtime DB', icon: 'firebase', level: 'Expert' },
      { name: 'Firestore', icon: 'firestore', level: 'Expert' }
    ]
  },
  {
    category: 'Firebase Suite',
    skills: [
      { name: 'FCM Push Notifications', icon: 'fcm', level: 'Expert' },
      { name: 'Firebase Analytics', icon: 'analytics', level: 'Expert' },
      { name: 'Crashlytics', icon: 'crashlytics', level: 'Expert' },
      { name: 'Firebase Auth', icon: 'auth', level: 'Expert' }
    ]
  },
  {
    category: 'AI Dev Tools',
    skills: [
      { name: 'Claude AI', icon: 'claude', level: 'Expert' },
      { name: 'Cursor AI', icon: 'cursor', level: 'Expert' },
      { name: 'Antigravity AI', icon: 'antigravity', level: 'Expert' },
      { name: 'Gemini (Android Studio)', icon: 'gemini', level: 'Expert' },
      { name: 'DeepSeek / ChatGPT', icon: 'deepseek', level: 'Expert' }
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', icon: 'git', level: 'Expert' },
      { name: 'Android Studio', icon: 'androidstudio', level: 'Expert' },
      { name: 'Gradle', icon: 'gradle', level: 'Advanced' },
      { name: 'Play Store Publishing', icon: 'playstore', level: 'Expert' }
    ]
  },
  {
    category: 'Leadership & Other',
    skills: [
      { name: 'Team Lead & Mentoring', icon: 'team', level: 'Expert' },
      { name: 'Sprint Planning & Scrum', icon: 'scrum', level: 'Expert' },
      { name: 'TensorFlow Lite', icon: 'tensorflow', level: 'Advanced' },
      { name: 'Bluetooth (BLE)', icon: 'bluetooth', level: 'Advanced' }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'redspark',
    role: 'Senior Android / Flutter Mobile Application Developer',
    company: 'Redspark Technologies LLP',
    location: 'Vadodara, Gujarat',
    period: 'May 2025 – Present',
    achievements: [
      'Architecting and shipping high-performance production Android & Flutter apps across healthcare, fitness, gaming, and service verticals.',
      'Leading and mentoring a team of 4 junior Android/Flutter developers, running sprint planning, code reviews, task delegation, and ensuring on-time delivery.',
      'Engineered system-level blocking solutions (BGB) using Accessibility Services with complex multi-tier monetization.',
      'Designed GPS-driven scheduling, job-matching engines, and real-time syncing architectures.'
    ],
    techStack: ['Kotlin', 'Java', 'Dart', 'Flutter', 'Android SDK', 'Accessibility Services', 'Socket.IO', 'Firebase', 'FCM'],
    responsibilities: [
      'Mobile Architecture: Designing scalable, offline-first structures using Clean Architecture and MVVM.',
      'Team Leadership: Mentoring 4 developers, conducting daily standups, review sessions, and task estimations.',
      'SDK Integration: Merging real-time audio/video, AI models, and custom IoT Bluetooth connections.',
      'Release Engineering: Maintaining release tracks and automated CI/CD for Play Store publishing.'
    ]
  },
  {
    id: 'rydot',
    role: 'Jr. Mobile Application Developer (Android & Flutter)',
    company: 'Rydot Infotech Pvt. Ltd.',
    location: 'Ahmedabad, Gujarat',
    period: 'Jan 2022 – May 2025',
    achievements: [
      'Owned the entire SDLC for 10+ Android/Flutter apps across agri-tech, enterprise, signage, security, and attendance domains.',
      'Scaled Divine Talk to over 500K+ downloads, implementing real-time websocket status detection and optimizing chat UI.',
      'Delivered Adama Farmer Reach to 100K+ users with robust offline storage, weather API syncing, and reward metrics.',
      'Integrated TensorFlow Lite facial recognition models and custom Bluetooth bridges in attendance apps.'
    ],
    techStack: ['Kotlin', 'Java', 'Dart', 'Flutter', 'React Native', 'TensorFlow Lite', 'Agora RTC', 'Bluetooth BLE', 'Retrofit', 'SQLite'],
    responsibilities: [
      'Feature Engineering: Building complex custom UI, local database management (Room DB), and dynamic scoreboards.',
      'React Native Bridging: Writing native Kotlin bridges to solve network protocol limitations of cross-platform libraries.',
      'AI Championing: Driving adoption of Claude, Cursor, and DeepSeek to accelerate feature cycles by 40%.',
      'Performance Optimization: Profiling apps for memory leaks, battery utilization, and network load reduction.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'divine-talk',
    title: 'Divine Talk',
    tagline: 'Real-time Astrology Consultation Platform with 500K+ Downloads',
    category: ['Android', 'Kotlin', 'Java', 'Realtime', 'Marketplace'],
    overview: 'Divine Talk is a high-traffic astrology consultation super-app connecting users with professional astrologers in real-time. It has been published on the Play Store with more than 500K downloads.',
    problem: 'Astrology consultation requires instant, real-time presence indicators, low-latency audio/video calling, and complex financial billing per minute. Standard polling mechanisms failed under load, causing user dissatisfaction and lost revenue.',
    solution: 'Replaced polling with a custom-engineered Socket.IO implementation for immediate presence detection. Redesigned the chat, shop, and astrologer dashboard using MVVM and LiveData, optimizing pixel-perfect rendering across tablet and mobile layouts.',
    responsibilities: [
      'Implemented real-time Socket.IO communication for astrologer online/offline status, queue position, and chat message delivery.',
      'Redesigned core UI pages (Chat, Shop, Dashboard) to comply with modern Material Design principles.',
      'Refactored the application architecture from MVC to MVVM + LiveData to decouple network operations from views.',
      'Integrated Agora RTC for secure audio/video calling with dynamic call rate calculations.'
    ],
    architecture: 'MVVM (Model-View-ViewModel) + Clean Architecture + Repository Pattern. Uses LiveData and StateFlow for reactive, lifecycle-aware UI updates, and retrofitted OkHttp clients with websocket connections.',
    techStack: ['Kotlin', 'Java', 'Socket.IO', 'Agora RTC/RTM', 'MVVM', 'LiveData', 'Retrofit', 'Room DB'],
    challenges: 'Managing socket reconnections gracefully in low-connectivity areas without exhausting battery life or losing active chat/call sessions.',
    businessImpact: 'Scaled to 500K+ active downloads, improved session success rates by 35%, and increased average consulting session durations by 22% due to improved connection stability.',
    gallery: [],
    playStore: 'https://play.google.com/store',
    detail: {
      overview: 'Divine Talk connects over half a million users to certified astrologers for live chat and call consultation. Built using a robust Kotlin foundation, the app processes thousands of concurrent real-time events.',
      businessProblem: 'The legacy app suffered from high latency during astrologer status updates. Astrologers would appear "available" when already in a call, leading to failed consultation attempts, high customer refund requests, and lost revenue.',
      architecture: 'Developed with strict MVVM principles. Sockets act as the real-time event pipeline feeding the Repository, which triggers LiveData updates. Clean separation guarantees the UI remains responsive, even during heavy traffic spikes.',
      responsibilities: [
        'Designed socket payload architecture for lightweight chat packets and heartbeat pings.',
        'Refactored the asto-consultation interface for single-hand usability on Android device displays.',
        'Optimized background thread execution using Kotlin Coroutines, eliminating main-thread blockages.'
      ],
      techStack: ['Kotlin', 'Java', 'Socket.IO', 'Agora SDK', 'Room DB', 'Coroutines', 'Retrofit', 'SharedPref Caching'],
      challenges: 'Handling concurrent state transitions: e.g. when an astrologer goes offline while a user is clicking "Call". This was resolved using a mutex state-locking system on the backend and immediate UI rollback mechanisms.',
      solutions: 'Designed an optimistic UI state engine that immediately shows status shifts, validated by a rapid double-handshake websocket call.',
      performance: 'Reduced memory footprint by 28% through custom bitmap caching for astrologer profile feeds. Reduced data usage by 40% using gzip socket compression.',
      lessonsLearned: 'Real-time client-server communication requires robust heartbeat mechanisms and client-side retry timers with exponential backoff.',
      timeline: '6 Months (Development & Optimization)'
    }
  },
  {
    id: 'adama-farmer-reach',
    title: 'Adama Farmer Reach',
    tagline: 'Offline-First Agricultural Companion App with 100K+ Downloads',
    category: ['Android', 'Kotlin', 'Java', 'Enterprise', 'Offline First'],
    overview: 'Adama Farmer Reach is an offline-first mobile assistant for farmers, offering weather forecast alerts, location-based dealer matching, expert Q&A, and loyalty rewards. The app has achieved over 100K+ downloads.',
    problem: 'Farmers operates in remote fields with highly unstable or non-existent internet connections. Traditional cloud-dependent mobile apps are unusable, cutting off farmers from vital agricultural data.',
    solution: 'Designed and implemented an offline-first storage and syncing layer using SQLite/Room. The app cache updates weather patterns, product information, and dealer locations when online, allowing complete functionality in the field.',
    responsibilities: [
      'Designed the local SQLite cache structure and synchronization strategy for delta-updates.',
      'Integrated geolocation features using Google Play Services Location API to map dealers and forecast weather.',
      'Developed the expert Q&A module allowing photos of crops to be uploaded for diagnosis (queued offline, uploaded online).',
      'Configured Firebase Analytics & Crashlytics to monitor field performance.'
    ],
    architecture: 'Repository Pattern with Room database acting as the Single Source of Truth (SSOT). Networking utilizes Retrofit with custom network state checkers and retry interceptors.',
    techStack: ['Kotlin', 'Java', 'Room DB', 'SQLite', 'Retrofit', 'Google Maps API', 'Firebase Analytics'],
    challenges: 'Synchronizing local offline changes (such as farmer reward points and expert questions) with the backend database without conflicts when connection is restored.',
    businessImpact: 'Reached 100K+ farmers in rural communities, increased product discovery by 50%, and maintained 99.8% crash-free sessions via automated error queuing.',
    gallery: [],
    playStore: 'https://play.google.com/store',
    detail: {
      overview: 'Adama Farmer Reach acts as a vital tool for farmers, supplying crop guidelines, disease diagnoses, and reward trackers. It ensures continuity of service by caching all essential datasets locally.',
      businessProblem: 'Agronomists and farmers lost access to product catalogues and expert consultation when visiting remote fields. The business required an app that could queue queries, track reward scans, and load maps offline.',
      architecture: 'Clean Architecture with Room database cache. App logic polls local DB, while a background WorkManager scheduler handles syncing files and survey answers to the server in the background.',
      responsibilities: [
        'Architected the Room DB schema with multiple relational tables for products, weather, and chats.',
        'Built a WorkManager-based background synchronization engine that triggers only on unmetered network conditions.',
        'Created a localized custom UI for multiple regional Indian dialects.'
      ],
      techStack: ['Kotlin', 'Java', 'Room', 'WorkManager', 'Retrofit', 'Google Maps SDK', 'Firebase SDK'],
      challenges: 'Syncing crop diagnosis images over weak 2G connections. Resolved by implementing automatic image compression (JPEG scaling) down to <100KB before queuing upload.',
      solutions: 'Designed an intelligent network interceptor that monitors bandwidth and pauses/resumes image uploads.',
      performance: 'Reduced average startup latency to 120ms by lazy-loading heavy map configurations and caching localized strings.',
      lessonsLearned: 'Offline-first requires predicting user workflows and loading essential data paths ahead of time.',
      timeline: '8 Months'
    }
  },
  {
    id: 'p2t',
    title: 'P2T - Push to Talk',
    tagline: 'Enterprise-Grade Security Communication & Video Dispatch System',
    category: ['Android', 'Kotlin', 'Realtime', 'Enterprise'],
    overview: 'P2T is an ultra-secure, enterprise communication app tailored for security agencies, enabling walkie-talkie-style audio/video calls, group chats, emergency SOS signals, and live GPS location tracking.',
    problem: 'Traditional security radios are expensive, range-limited, and lack video/text capabilities. Mobile VoIP alternatives lack the instant "one-press" audio connection (PTT) and real-time dispatch map views needed during active security incidents.',
    solution: 'Engineered an instant audio/video transmission platform using Agora RTC/RTM SDK. Built background execution systems that listen for PTT buttons even when the screen is locked, and mapped real-time GPS coordinates of active personnel.',
    responsibilities: [
      'Integrated Agora RTC for push-to-talk audio and high-fidelity video streaming.',
      'Developed background services and broadcast receivers to override hardware keys (e.g. volume buttons) for walkie-talkie triggers.',
      'Created the real-time Google Maps dispatch overlay showing group members and active SOS warnings.',
      'Implemented TLS socket connections for messaging and security alert propagation.'
    ],
    architecture: 'Foreground Service architecture with partial wake locks to ensure persistent connection. Uses MVVM with Coroutines for background threading, and customized Agora RTM channels.',
    techStack: ['Kotlin', 'Agora RTC/RTM', 'Google Maps API', 'Android Foreground Services', 'WebSockets', 'RxJava'],
    challenges: 'Maintaining connection stability and low-latency audio transmission while transitioning between Wi-Fi and mobile networks under strict battery saving policies.',
    businessImpact: 'Deployed successfully to security teams, replacing physical radios, reducing equipment overhead by 60%, and cutting incident response times by half.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'P2T transforms ordinary Android devices into high-performance security communicators. It provides instant voice dispatch, group coordination, and emergency response mechanisms for enterprise customers.',
      businessProblem: 'Security agencies required a private, zero-latency PTT service with live dispatch dashboard mapping. Standard VoIP protocols had too much handshake latency (1-2s) which is unacceptable in crisis situations.',
      architecture: 'Uses a persistent Android Foreground Service holding WebSockets and Agora stream references. Coordinates are periodically emitted via location providers and mapped instantly on the dispatcher dashboard.',
      responsibilities: [
        'Wrote custom Android audio routing layers to switch between earpiece, speakerphone, and Bluetooth headsets.',
        'Programmed the system-level hardware key hooks (PTT trigger mapping).',
        'Implemented SOS alert system that bypasses device silence settings to ring dispatcher consoles.'
      ],
      techStack: ['Kotlin', 'Agora SDK', 'Google Location API', 'WebSockets', 'Foreground Services', 'JSON Schema'],
      challenges: 'Agora socket dropouts when switching cells. Solved by writing an automated, rapid session-reconnection state machine that re-subscribes to channels within 200ms.',
      solutions: 'Re-designed session handshakes using lightweight UDP pre-connections before full Agora RTOS initialization.',
      performance: 'Achieved sub-150ms audio latency (mouth-to-ear) across standard LTE networks. Optimized GPS polling to use cell tower triangulation when stationary to save 30% battery.',
      lessonsLearned: 'Hardware key interception on Android requires special handling for different OEM skins (Samsung, Xiaomi, etc.).',
      timeline: '10 Months'
    }
  },
  {
    id: '3fitstyle',
    title: '3FitStyle (Dovis)',
    tagline: 'Social Fitness Platform with Reels, Chat, and In-App Subscriptions',
    category: ['Android', 'Kotlin', 'Java', 'Realtime', 'Sports'],
    overview: '3FitStyle is a social network and fitness companion app. It integrates Instagram-style vertical video reels, WhatsApp-style group chats, Facebook-style community feeds, workout trackers, and subscription checkouts.',
    problem: 'Engaging users in fitness requires community support, but standard fitness apps lack interactive features. Combining video processing, real-time chats, and secure checkouts into a single app often leads to sluggish UI performance.',
    solution: 'Designed and built the full client architecture. Integrated ExoPlayer with cache pre-fetching for smooth scrolling in video feeds. Developed WebSockets-based group chat with read receipts and implemented multi-tier Google Play In-App Purchases.',
    responsibilities: [
      'Built the custom video player interface with auto-play, caching, and pre-loading using ExoPlayer.',
      'Developed real-time group chat and private messaging module with media attachments and typing indicators using Socket.IO.',
      'Integrated Google Play Billing Library to manage subscription tiers, donations, and fitness plans.',
      'Implemented Role-Based Access Control (RBAC) to handle creator, admin, and user profile variations.'
    ],
    architecture: 'Clean Architecture with modular feature packaging. Uses ExoPlayer cache managers, WorkManager for video uploading, and Socket.IO for duplex communication.',
    techStack: ['Kotlin', 'Java', 'Socket.IO', 'ExoPlayer', 'Google Play Billing API', 'Firebase', 'Room DB'],
    challenges: 'ExoPlayer memory management in recyclerviews, preventing memory leaks and frame-drops when scrolling rapidly through video reels.',
    businessImpact: 'Maintained 4.6-star rating on the Play Store, generated recurring subscription revenue, and increased daily user engagement time by 400%.',
    gallery: [],
    playStore: 'https://play.google.com/store/apps/details?id=com.threefitstyle',
    detail: {
      overview: '3FitStyle (Dovis) merges fitness tracking with social experiences. Users can publish workout videos, chat with fitness groups, purchase workout routines, and subscribe to premium coaches.',
      businessProblem: 'Existing fitness apps had low retention rates. The client wanted to build a social-first app. The challenge was displaying high-definition video reels, real-time message sync, and checkout flows without UI stuttering.',
      architecture: 'Modular feature-by-feature layout. Separate modules for chat, feed, video player, and billing. Uses local Room databases to store chat threads and workout data for offline viewing.',
      responsibilities: [
        'Configured ExoPlayer caching pipelines using SimpleCache and LeastRecentlyUsedCacheEvictor.',
        'Created a dynamic QR-code system allowing users to scan and instantly join local fitness groups.',
        'Implemented custom canvas rendering for user progress tracking charts and workout logs.'
      ],
      techStack: ['Kotlin', 'Java', 'ExoPlayer', 'Socket.IO', 'Play Billing SDK', 'GL Glide', 'Room DB'],
      challenges: 'Handling in-app purchases across different regions with local taxes and currency symbols. Handled via the Play Billing API, validated by backend webhooks.',
      solutions: 'Created a secure payment verification system that triggers local storage updates only after server-side Google receipt verification.',
      performance: 'Optimized video feed scroll behavior, achieving stable 60 FPS on mid-range devices. Reduced image load time by 30% by tuning Glide parameters.',
      lessonsLearned: 'ExoPlayer instances must be aggressively pooled and recycled in lists to prevent OutOfMemory errors.',
      timeline: '12 Months'
    }
  },
  {
    id: 'turnout-k',
    title: 'TurnoutK',
    tagline: 'AI-Powered Facial Recognition & BLE Attendance Signage Client',
    category: ['Android', 'Kotlin', 'AI', 'Enterprise'],
    overview: 'TurnoutK is an enterprise smart kiosk application that performs automatic employee attendance logging using local AI facial recognition and IoT Bluetooth beacons.',
    problem: 'Card swiping and manual attendance sheets are prone to fraud ("buddy punching") and slow down entry shifts. Standard cloud facial recognition systems are slow and fail when internet drops.',
    solution: 'Integrated TensorFlow Lite models directly on-device to perform local facial recognition in <500ms. Connected with Bluetooth Low Energy (BLE) beacons to verify employee physical proximity.',
    responsibilities: [
      'Integrated TensorFlow Lite face detection and embedding models for on-device recognition.',
      'Developed BLE scan managers that detect nearby authorized company badges and unlock face tracking.',
      'Built a React Native bridging layer to connect native Kotlin camera feeds with React Native UI controls.',
      'Programmed physical status indicators (LEDs and relay gates) using Android USB-host/serial interface.'
    ],
    architecture: 'Clean Architecture with native Android integration. Embedded CameraX SDK for high-performance frame capture and piped frames to a TFLite analyzer block.',
    techStack: ['Kotlin', 'React Native', 'TensorFlow Lite', 'Bluetooth BLE', 'CameraX SDK', 'Android Serial Port'],
    challenges: 'Achieving high recognition accuracy under variable office lighting conditions and maintaining low latency on budget tablets.',
    businessImpact: 'Eliminated attendance fraud entirely, shortened check-in times to 1.2 seconds per employee, and logged 10,000+ daily check-ins across multiple enterprise offices.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'TurnoutK is a smart terminal app. It uses the tablet camera to scan faces, computes biometric hash values locally using TensorFlow Lite, matches them against a local SQL database, and logs entries.',
      businessProblem: 'Enterprise customers required an attendance terminal that could process shifts of 200+ employees in minutes, secure biometric data locally to comply with privacy laws, and operate without cloud dependency.',
      architecture: 'CameraX frames are sent to a background thread handler running face-detection and landmark alignment. Recognized face arrays are compared against cached SQLite templates. Matches are posted to a local DB and synced.',
      responsibilities: [
        'Created a custom image processor to convert YUV camera formats to RGB bitmaps for TFLite.',
        'Wrote a native Kotlin React Native bridge to transfer byte buffers without copying, preventing garbage collection stalls.',
        'Built system-level controls to prevent tablets from sleeping or users from closing the app.'
      ],
      techStack: ['Kotlin', 'CameraX', 'TensorFlow Lite', 'React Native Bridge', 'SQLite', 'BLE SDK', 'Android Serial'],
      challenges: 'React Native thread blocking when rendering camera overlays. Solved by rendering the camera view in a native SurfaceView overlaying the React Native container.',
      solutions: 'Decoupled image analysis threads from UI renderers, running TFLite inference on separate workers.',
      performance: 'Reduced biometric evaluation time to 320ms per face. Optimized BLE scanning intervals to run only when motion is detected, saving 50% power.',
      lessonsLearned: 'On-device AI requires careful management of thermal throttling. Running models continuously will overheat standard tablets.',
      timeline: '9 Months'
    }
  },
  {
    id: 'turnout-m',
    title: 'TurnoutM',
    tagline: 'Mobile Attendance Tracker with Proximity & Native Kotlin Bridges',
    category: ['Android', 'Kotlin', 'Enterprise', 'Realtime'],
    overview: 'TurnoutM is the personal mobile companion app for the Turnout ecosystem, allowing employees to log attendance, check hours, and view schedules via BLE and GPS validation.',
    problem: 'Cross-platform mobile frameworks (like React Native) have native limitations when handling continuous BLE background scans and low-level socket connections, leading to unstable background execution.',
    solution: 'Designed and implemented native Kotlin bridges for the React Native container, handling location geofencing, BLE beacon authentication, and background REST API sync.',
    responsibilities: [
      'Wrote native Kotlin modules for React Native to manage BLE scanning and connection lifecycles.',
      'Implemented GPS geofencing to restrict attendance check-ins within office radius.',
      'Developed native network protocols using custom OkHttp clients, bypassing React Native networking bottlenecks.',
      'Designed offline sync mechanisms that upload pending check-ins when location validation matches.'
    ],
    architecture: 'Hybrid React Native application backed by native Kotlin modules for hardware (BLE, GPS, Network) operations.',
    techStack: ['Kotlin', 'React Native', 'BLE API', 'Google Location Services', 'OkHttp', 'JSON Serialization'],
    challenges: 'Bridging high-frequency BLE scan events to JavaScript without causing bridging lag and memory expansion.',
    businessImpact: 'Achieved 99.9% check-in reliability and decreased customer support tickets regarding attendance logging issues by 70%.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'TurnoutM allows employees to verify their attendance using their own smartphones. It connects to the office kiosk and verifies proximity via BLE and GPS, checking in with a single tap.',
      businessProblem: 'React Native’s JS thread was insufficient for continuous background beacon tracking. The app suffered from missed scans, slow geofence alerts, and high battery drainage.',
      architecture: 'Native Kotlin handles the background scanning service, sending events to React Native only when an office beacon is matched and validated.',
      responsibilities: [
        'Authored robust Java/Kotlin native modules for React Native packages.',
        'Wrote a battery-optimized GPS geofence tracker using Android’s Geofencing API.',
        'Configured SSL Pinning on native OkHttp clients for enterprise network security.'
      ],
      techStack: ['Kotlin', 'React Native', 'OkHttp3', 'Geofencing Client', 'Android JobScheduler'],
      challenges: 'Handling Android 12+ fine location permission restrictions for background BLE tracking. Solved by implementing dynamic permission checks and a helper wizard UI.',
      solutions: 'Created a fallback manual QR-checkin mechanism for users who opted out of location permissions.',
      performance: 'Background service battery drain reduced to less than 1.5% per 8-hour shift. Native API calls bypass JS serialization, reducing response time by 80ms.',
      lessonsLearned: 'Writing custom native bridges is often faster and more stable than maintaining buggy third-party React Native libraries.',
      timeline: '5 Months'
    }
  },
  {
    id: 'goalactico',
    title: 'Goalactico',
    tagline: 'Real-time Sports Gaming & Live Tournament Tracking Platform',
    category: ['Android', 'Kotlin', 'Java', 'Realtime', 'Sports'],
    overview: 'Goalactico is a live sports tournament tracker and scoreboard app. It allows organizers to manage tournaments, update live scores, and lets fans track game timelines and stats in real-time.',
    problem: 'Live sports apps must deliver tournament scores, penalty events, and point table changes with zero latency. Delays in score delivery ruin the fan experience, and managing local timers in-app often drifts from referee clocks.',
    solution: 'Engineered a real-time event-driven scoring application. Developed a custom local countdown timer system synced with server NTP offsets, and created a dynamic tournament bracket and point table visualizer.',
    responsibilities: [
      'Developed dynamic point table views that update on-the-fly using DiffUtil and recyclerviews.',
      'Created custom local countdown timer logic that accounts for network delays and pause periods.',
      'Implemented real-time match events timeline (goals, bookings, substitutions) using lightweight REST endpoints and WebSockets.',
      'Designed user community feed where fans can post match reviews, images, and discuss games.'
    ],
    architecture: 'Reactive MVVM architecture with Coroutines. Uses custom countdown classes and WebSocket subscriptions to capture referee console updates.',
    techStack: ['Kotlin', 'Java', 'WebSockets', 'REST APIs', 'MVVM', 'Coroutines', 'DiffUtil', 'Room DB'],
    challenges: 'Ensuring the local match timer remains perfectly synchronized with the stadium referee timer, even when the user locks their screen or loses connection.',
    businessImpact: 'Used in 5 local tournaments with 50+ matches, attracting 20,000+ active sports fans and logging 100% accurate match timelines.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Goalactico supports grassroots sports leagues with professional-grade digital tools. Fans can track live tables, match cards, top scorers, and discuss events on player community walls.',
      businessProblem: 'Grassroots leagues lack expensive digital boards. Goalactico was built to bridge this gap, but synchronizing timer stop/resume events and game logs across thousands of viewers required bulletproof state sync.',
      architecture: 'The referee app publishes events (e.g. goal, whistle) to the server. The viewer app subscribes to these channels, feeding an event-log database that reconstructs the match timeline on the client device.',
      responsibilities: [
        'Engineered the local millisecond-accurate timer class that calibrates clock drift using NTP server offsets.',
        'Created a modular match-centre UI displaying rosters, card logs, and dynamic line-up formations.',
        'Implemented offline caching for historical match scoreboards.'
      ],
      techStack: ['Kotlin', 'Java', 'WebSockets', 'Retrofit', 'Room', 'NTP Clock Synchronization', 'Glide'],
      challenges: 'Handling multiple simultaneous match updates during tournament finals without freezing the UI thread.',
      solutions: 'Isolated socket event listening to a background Coroutine scope, batches updates, and applies them to the UI using DiffUtil.',
      performance: 'Achieved sub-100ms UI sync from referee click to fan phone screen. Reduced layout drawing cycles on the bracket view by removing nested layouts.',
      lessonsLearned: 'Standard Android CountDownTimer is inaccurate and prone to drift; a custom system loop using `SystemClock.elapsedRealtime()` is required.',
      timeline: '7 Months'
    }
  },
  {
    id: 'truequea',
    title: 'Truequea',
    tagline: 'Multi-Profile Exchange Marketplace with Sub-Accounts & Real-time Chat',
    category: ['Android', 'Kotlin', 'Java', 'Marketplace', 'Realtime'],
    overview: 'Truequea is a multi-profile bartering and service exchange marketplace. It features Netflix-style sub-accounts, business profile toggling, and real-time chat with transaction negotiation flows.',
    problem: 'Standard marketplaces focus on single buy/sell roles. A bartering platform requires users to easily toggle profiles (personal vs. business), switch profiles with secure PIN codes, and negotiate trades within chat via custom contracts.',
    solution: 'Designed and engineered a multi-profile container app. Built a secure PIN switching module for sub-accounts, and integrated a WebSocket chat system containing custom quotation cards and transaction status updates.',
    responsibilities: [
      'Created Netflix-style sub-account profile selector with PIN-based encryption and validation.',
      'Developed real-time negotiation chat supporting direct text, image sharing, and quotation cards.',
      'Built business profile switching logic, loading distinct UI layouts and access levels dynamically.',
      'Integrated security measures protecting financial and trade terms stored in the database.'
    ],
    architecture: 'MVVM architecture with secure shared preferences and local database indexing for chats. Uses WebSockets for real-time negotiations and transaction state machines.',
    techStack: ['Kotlin', 'Java', 'WebSockets', 'REST APIs', 'SQLCipher', 'SharedPref Encrypted', 'MVVM'],
    challenges: 'Handling complex chat state negotiations (e.g., offer made, accepted, counter-offered, cancelled) dynamically in a chat window without lagging messages.',
    businessImpact: 'Successfully deployed in South American exchange hubs, facilitating 15,000+ trades and receiving high praise for its sub-account structure.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Truequea matches barter offers. Users can list items, check business catalogs, and negotiate terms. Sub-accounts allow family members to share a single account with PIN restrictions.',
      businessProblem: 'Families wanted to barter collectively under a single billing account but protect personal listing chats. The business required sub-accounts and custom interactive contracts within chats.',
      architecture: 'The chat model acts as a finite state machine. Message structures contain custom payloads (JSON schemas) indicating contract conditions, rendering interactive accept/decline buttons dynamically.',
      responsibilities: [
        'Programmed the sub-account PIN vault using Android Keystore and SQLCipher.',
        'Wrote custom layout inflation logic for the chat window, supporting text, items, and contract states.',
        'Implemented search-filtering for barter categories based on GPS distance.'
      ],
      techStack: ['Kotlin', 'Java', 'WebSockets', 'SQLCipher', 'Keystore API', 'MVVM', 'Moshi Serialization'],
      challenges: 'Database corruption when switching accounts rapidly. Solved by writing strict database connection-pool managers that close and re-open encrypted DB instances cleanly.',
      solutions: 'Created a thread-safe singleton database helper that queues profile transitions.',
      performance: 'Secured profile switching in <100ms. Reduced background sync payload size by 65% using diff-based catalog updates.',
      lessonsLearned: 'Staging and validating complex business status logic inside chat bubbles requires a modular, message-view-holder factory design.',
      timeline: '8 Months'
    }
  },
  {
    id: 'mehanii',
    title: 'Mehanii',
    tagline: 'Bilingual On-Demand Service Professional Finder & Invoicing App',
    category: ['Flutter', 'Dart', 'Healthcare', 'Marketplace'],
    overview: 'Mehanii is a bilingual (Arabic/English) Flutter application designed for service professionals. It handles GPS job matches, navigation, analytics dashboards, and automated invoices.',
    problem: 'Service professionals need job notifications, live mapping, and invoicing in their native language (Arabic/English). Inconsistent layout scaling in RTL (Right-to-Left) languages causes broken UI on different screen sizes.',
    solution: 'Developed the Flutter client with robust RTL support. Built a GPS-based job matching service that alerts users in the background using FCM, and implemented automated PDF invoice generation and billing.',
    responsibilities: [
      'Developed clean, responsive layouts that dynamically switch alignment based on LTR/RTL locales.',
      'Integrated Google Maps SDK with live routing and professional navigation controls.',
      'Implemented performance analytics dashboards with completion rates, score trackers, and earnings.',
      'Configured background location tracking and automated push notifications via Firebase FCM.'
    ],
    architecture: 'BLoC (Business Logic Component) pattern for state management, combined with clean repository structures. Integrates native plugins for maps and PDF printing.',
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'Google Maps API', 'Firebase FCM', 'Geolocator SDK', 'PDF Generator'],
    challenges: 'Handling RTL rendering bugs in Flutter (such as custom list scrolls, slider handles, and text padding anomalies).',
    businessImpact: 'Enabled 5,000+ active contractors to complete 50,000+ service bookings, with an average app rating of 4.7 stars.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Mehanii connects mechanics, plumbers, and technicians with local repair jobs. It serves as an all-in-one business client managing calendars, routes, jobs, and earnings dashboards.',
      businessProblem: 'The target workforce had limited technical experience and spoke Arabic primarily. The client needed a highly visual, simple-to-navigate app that supported right-to-left UI and offline work logging.',
      architecture: 'Clean architecture using BLoC pattern. Separate states for job matching, navigation, and billing. Uses local Hive DB storage for cached profiles and offline reports.',
      responsibilities: [
        'Created a responsive, cross-platform UI supporting absolute RTL directionality.',
        'Wrote a background service that listens for job alerts and pops up interactive notifications.',
        'Integrated a PDF creator package to format and print invoices directly to Bluetooth receipt printers.'
      ],
      techStack: ['Flutter', 'Dart', 'flutter_bloc', 'Hive DB', 'Google Maps Flutter', 'FCM Services', 'PDF Plugin'],
      challenges: 'Flutter Google Maps camera movements stuttering during turn-by-turn updates on low-end Android phones.',
      solutions: 'Smoothed map movement using custom animation curves on camera updates and throttle marker updates to once every 3 seconds.',
      performance: 'Maintained 60 FPS on low-cost devices by keeping the widget tree shallow and avoiding rebuilds via BlocSelector.',
      lessonsLearned: 'RTL layout planning must be done from day one; retrofitting RTL support into LTR codebases introduces layout errors.',
      timeline: '9 Months'
    }
  },
  {
    id: 'bgb',
    title: 'BGB',
    tagline: 'System-Level Call & SMS Blocker using Accessibility Services',
    category: ['Android', 'Kotlin', 'Java', 'Enterprise'],
    overview: 'BGB is a powerful TrueCaller-alternative call and SMS blocker. It leverages system accessibility services for deep call/SMS filtering, application controls, and usage logging.',
    problem: 'Standard call-blocking apps fail to block modern spam calls, SMS alerts, and app notifications at the system level. Android’s security model restricts standard apps from intercepting these events unless configured with custom accessibility APIs.',
    solution: 'Engineered a system utility using Android Accessibility Services. Designed background interceptors for SMS and calls, built a secure lock module for selected apps, and integrated multi-tier subscriptions and local analytics.',
    responsibilities: [
      'Developed custom Android Accessibility Service classes to intercept system windows, call notifications, and incoming SMS.',
      'Built a local dashboard using Room DB to process and display call/SMS analytics.',
      'Created multi-language configurations (English/Turkish) using XML resources and dynamic localization engines.',
      'Implemented system-level overlay windows to alert users of blocked spam threats.'
    ],
    architecture: 'Custom Android Service architecture bound to the OS Accessibility API framework. Uses Room DB for logging, and encrypted storage for user blocklists.',
    techStack: ['Kotlin', 'Java', 'Accessibility Services', 'Room DB', 'Android Overlay Window', 'BroadcastReceiver'],
    challenges: 'Ensuring the background accessibility service runs continuously without being terminated by Android’s aggressive memory managers (Lmk) or battery optimizations.',
    businessImpact: 'Gained over 50,000+ active downloads, blocked millions of spam communications, and generated monetization through premium subscriptions.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'BGB provides call, SMS, and app blocking controls. It is designed to help users block distractors, spam, and protect their privacy at the system layer.',
      businessProblem: 'Standard call screeners do not intercept notification streams or chat popups from apps like WhatsApp. The customer wanted system-level blocking of callers, SMS, and custom apps during scheduled focus blocks.',
      architecture: 'An active Accessibility Service listens to AccessibilityEvents. When target events (call incoming, app launched) occur, the service checks against user rules and renders an overlay block window or sends block signals.',
      responsibilities: [
        'Implemented system overlay permissions and custom layout drawings using WindowManager.',
        'Wrote a background analyzer for text content in SMS to detect phishing keywords.',
        'Designed localized layouts in Turkish and English, conforming to regional accessibility guidelines.'
      ],
      techStack: ['Kotlin', 'Java', 'Accessibility API', 'WindowManager Overlay', 'Room', 'SharedPrefs'],
      challenges: 'Android security policies restrict overlay drawings on Android 10+. Solved by registering for system overlay permissions and routing users through a settings wizard.',
      solutions: 'Created a guided video tutorial inside the app showing how to enable the required permission.',
      performance: 'Interception logic fires in <15ms, preventing notifications from displaying. Battery impact is less than 2% per 24 hours.',
      lessonsLearned: 'Accessibility Services require rigorous compliance with Google Play Store policies to avoid developer account suspensions.',
      timeline: '11 Months'
    }
  },
  {
    id: 'assistant-chat-sdk',
    title: 'Assistant Chat SDK',
    tagline: 'Enterprise White-Label WebSocket Chat Engine and Custom SDK',
    category: ['Android', 'Kotlin', 'Java', 'Realtime', 'AI'],
    overview: 'Assistant Chat SDK is a customizable, white-label messaging engine designed to embed high-performance chat features, chatbot interfaces, and AI assistant consoles into enterprise applications.',
    problem: 'Building chat features from scratch for multiple apps is redundant. Existing SDKs are expensive, limit styling, and lack native WebSocket support, offline sync, and typing indicators.',
    solution: 'Designed and built a modular Kotlin SDK from scratch. It features a WebSocket connection engine, local message caching, offline queuing, presence tracking, and runtime theme customization APIs.',
    responsibilities: [
      'Designed the SDK architecture, exposing clear public APIs for messaging, attachments, and socket lifecycles.',
      'Developed the real-time WebSocket protocol engine with ping-pong checks and reconnect loops.',
      'Created runtime theme configurations, allowing client developers to edit colors, buttons, and fonts via code.',
      'Authored comprehensive documentation and sample application integrations.'
    ],
    architecture: 'Modular Android Library (AAR) structure with clean API boundaries. Uses OkHttp WebSockets for communication and Room DB for internal data storage.',
    techStack: ['Kotlin', 'Java', 'WebSockets', 'OkHttp', 'Room DB', 'Custom SDK Design', 'Gradle Build Src'],
    challenges: 'Designing a lightweight, zero-dependency SDK that doesn’t conflict with libraries already present in host applications.',
    businessImpact: 'Adopted by 4 corporate clients, eliminating their messaging development costs and powering chat for over 200,000 end-users.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Assistant Chat SDK is a plug-and-play white-label library. It allows companies to integrate real-time support chats and AI bots into their existing Android apps with three lines of setup code.',
      businessProblem: 'Enterprise customers required a highly secure, private chat framework that could run on their own server infrastructure, customize themes dynamically without app recompilation, and cache histories securely.',
      architecture: 'A core singleton coordinator manages the socket thread and Room persistence. Host apps communicate using lightweight callbacks, event listeners, and standard model classes.',
      responsibilities: [
        'Architected the Gradle build setup to compile a standalone, highly-optimized `.aar` library.',
        'Built dynamic theme managers using style resource overrides and programmatically applied ColorStateLists.',
        'Wrote thread-safe database access logic to store chat logs.'
      ],
      techStack: ['Kotlin', 'Java', 'WebSocket Engine', 'Room DB', 'OkHttp3', 'Gson', 'ThemeManager API'],
      challenges: 'Handling library dependency clashes (e.g. Gson/Moshi conflicts). Solved by shading (relocating packages) and minimizing third-party libraries in the SDK.',
      solutions: 'Replaced library dependencies with native Java/Kotlin classes where possible (such as using basic JSON parser structures).',
      performance: 'Library footprint is under 600KB. Message delivery is completed in <50ms after socket write.',
      lessonsLearned: 'Designing a developer-friendly SDK requires keeping API signatures simple and minimizing configuration parameters.',
      timeline: '6 Months'
    }
  },
  {
    id: 'calm-medical',
    title: 'Calm Medical',
    tagline: 'Dual-Role Healthcare Super-App with Scheduling & Multilingual Sync',
    category: ['Flutter', 'Dart', 'Healthcare', 'Realtime'],
    overview: 'Calm Medical is a dual-role healthcare app catering to patients (booking appointments, checking catalogs) and medical store managers (managing inventory, fulfilling orders).',
    problem: 'Healthcare applications must serve two user bases with separate dashboards. Managing appointments, coupon triggers, and flash sales in real-time requires strict sync to avoid overbooking or pricing errors.',
    solution: 'Built a cross-platform Flutter application with dynamic dashboards. Implemented localized calendar schedulers, a push-notification flash sale system, and multi-currency billing.',
    responsibilities: [
      'Developed separate UI dashboards for patients and medical store managers within a single client.',
      'Implemented real-time push notifications using Firebase FCM triggered by patient birthdays and anniversaries.',
      'Developed a coupon-redemption engine with local validation.',
      'Configured Chinese and English language localizations with support for multi-currency payment platforms.'
    ],
    architecture: 'BLoC pattern for business logic separation, combined with clean data layers for inventory API and patient booking API.',
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'Firebase FCM', 'Payment Gateway Integration', 'Multi-language'],
    challenges: 'Handling time zone conversions and booking calendar collisions when patients and medical managers are in different regions.',
    businessImpact: 'Adopted by 3 large clinical networks, managing 10,000+ monthly medical consultations and increasing local sales by 28% via flash promotions.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Calm Medical combines patient booking services with store logistics. Patients search clinics, book appointments, and order medications, while clinic staff process check-ins and invoice orders.',
      businessProblem: 'Clinics managed scheduling and inventory on separate databases. This resulted in scheduling errors and ordering products that were out of stock. A unified, real-time app was required.',
      architecture: 'A unified Flutter framework that displays UI templates based on authentication claims (Patient vs Manager). Realtime streams from the database keep product listings synchronized.',
      responsibilities: [
        'Created the dual-calendar scheduler with conflict resolution.',
        'Integrated local payment gateways for clinic consultation fee checkouts.',
        'Built localized string sheets in Chinese and English with automatic layout adjustments.'
      ],
      techStack: ['Flutter', 'Dart', 'flutter_bloc', 'FCM Client', 'Stripe SDK', 'Hive Caching', 'Intl Localization'],
      challenges: 'Ensuring that database updates to stock counts are reflected instantly on the customer app.',
      solutions: 'Subscribed customer product streams to reactive database sockets, which push silent catalog refreshes when changes occur.',
      performance: 'Achieved 95% on-time notification delivery rates. Optimized BLoC rebuilds, maintaining 60 FPS on basic mobile devices.',
      lessonsLearned: 'Decoupling user profile views into separate package structures in Flutter makes the codebase easier to maintain.',
      timeline: '8 Months'
    }
  },
  {
    id: 'digital-walls',
    title: 'Digital Walls',
    tagline: 'Enterprise Digital Signage CMS Client with Offline Media Playback',
    category: ['Android', 'Java', 'Enterprise'],
    overview: 'Digital Walls is a smart enterprise digital signage client app that runs on wall-mounted displays and televisions, downloading, organizing, and executing scheduled video advertisements.',
    problem: 'Commercial displays are prone to network drops, which can lead to empty screens or loading spinner displays. Additionally, scheduling, continuous 24/7 runtimes, and remote configuration present severe stability and memory leakage risks.',
    solution: 'Built an offline-first signage player in Java. Features automated ad playlist downloads, YouTube API integration, a 6-digit device secure onboarding flow, and automated self-recovery routines.',
    responsibilities: [
      'Developed the offline playback engine caching videos locally to ensure uninterrupted service.',
      'Integrated YouTube Player API for running online playlists with fallback options.',
      'Built a scheduled 4-minute check-in script that polls the CMS server for new media schedules.',
      'Implemented system-level auto-reboot, sleep timers, and remote system logs.'
    ],
    architecture: 'Robust background Service structure with active WakeLocks. Uses LocalStorage managers, custom ExoPlayer instances, and remote system health checkers.',
    techStack: ['Java', 'YouTube API', 'CMS API Client', 'ExoPlayer', 'AlarmManager', 'Android Window Flags'],
    challenges: 'ExoPlayer memory leakage and screen burn-in when running ads continuously for weeks without app reboots.',
    businessImpact: 'Deployed to 500+ commercial displays in retail malls, ensuring 99.9% screen uptime and delivering million-impression advertising campaigns.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Digital Walls converts any Android TV or tablet into a digital billboard. It connects to an administrative web panel and downloads scheduled media files to local storage for loop playback.',
      businessProblem: 'Signage boards in public settings face network dropouts. Showing error screens is bad for business. The signage client had to be self-healing, run offline, and report play audits securely.',
      architecture: 'A foreground service loops through a local JSON playlist. The app stores video files in system media folders. A separate alarm manager checks for playlist sync updates every 4 minutes.',
      responsibilities: [
        'Wrote a persistent media manager that deletes expired ad videos to keep disk utilization under 80%.',
        'Implemented the secure 6-digit device pairing protocol using device UUID validation.',
        'Wrote a self-recovery checker that restarts the activity if video playback freezes.'
      ],
      techStack: ['Java', 'ExoPlayer', 'YouTube API', 'AlarmManager', 'System File Utilities', 'JSON Parser'],
      challenges: 'Android OS sleeping and killing the player. Solved by acquiring partial WakeLocks and setting system window flags to keep the screen bright.',
      solutions: 'Configured a device-admin receiver that forces the screen to remain active and schedules auto-restart scripts at 3:00 AM daily.',
      performance: 'Memory leaks eliminated, enabling continuous runtime of 30+ days without restarts. Disk I/O is throttled to prevent storage degradation.',
      lessonsLearned: 'Java Android services must release resources during transitions, otherwise system memory limits will trigger app crashes.',
      timeline: '7 Months'
    }
  },
  {
    id: 'adama-dealer-khata',
    title: 'ADAMA Dealer Khata',
    tagline: 'Self-Service Dealer Financial Ledger App with QR Loyalty',
    category: ['Android', 'Kotlin', 'Java', 'Enterprise', 'Marketplace'],
    overview: 'ADAMA Dealer Khata is a financial transaction and self-service app built for agricultural dealers. It offers transaction ledgers, invoice downloads, and QR loyalty schemes.',
    problem: 'Dealers had to call corporate desks to confirm accounts, balances, and reward statuses. Complex authentication processes and laggy ledger downloads on cross-platform frameworks reduced dealer satisfaction.',
    solution: 'Designed and built the mobile client using a React Native base integrated with native Kotlin modules, providing high-performance ledger views, fast PDF generation, and QR scan libraries.',
    responsibilities: [
      'Developed native Kotlin modules to handle secure ledger processing and PDF invoice rendering.',
      'Integrated QR code scanners using ZXing/CameraX libraries for dealer reward point logging.',
      'Built native network layers resolving React Native HTTP client connection dropouts.',
      'Designed self-service panels for dealers to browse and enroll in product schemes.'
    ],
    architecture: 'Hybrid React Native application. Native Kotlin code manages CameraX QR scanners, file downloads, and secure storage, while JS handles basic layouts.',
    techStack: ['Kotlin', 'Java', 'React Native', 'QR Scanner SDK', 'Retrofit Client', 'PDF Library'],
    challenges: 'Mapping complex nested financial ledgers in list views, resolving JS thread bottlenecks.',
    businessImpact: 'Deployed to 10,000+ authorized dealers, automated ledger delivery, and decreased customer support calls by 85%.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'ADAMA Dealer Khata helps agricultural dealers track outstanding invoices, view payment histories, download legal invoices, and scan product QR tags to claim loyalty cashbacks.',
      businessProblem: 'React Native’s default fetch client suffered socket timeouts when pulling 10MB ledger payloads. Dealers also complained that QR scanning in webview-based widgets was slow.',
      architecture: 'The ledger dataset is retrieved via a native Kotlin Retrofit service, parsed, cached in SQLite, and rendered using native RecyclerViews before communicating status to React Native.',
      responsibilities: [
        'Implemented the native Kotlin bridge for high-speed file download and viewing.',
        'Integrated a fast QR/Barcode scanning module using Google ML Kit barcode APIs.',
        'Created secure authentication schemes with biometrics.'
      ],
      techStack: ['Kotlin', 'React Native', 'Google ML Kit Barcode', 'Room', 'Retrofit2', 'FileProvider API'],
      challenges: 'Android FileProvider security restrictions preventing other PDF reader apps from loading downloaded invoices.',
      solutions: 'Created a secure ContentProvider that grants read URI permissions temporarily to external viewer intents.',
      performance: 'Ledger load times reduced from 12 seconds to 400ms using local SQLite indexing and page pagination. QR scan speed improved by 4x.',
      lessonsLearned: 'Heavy file downloads and document rendering should always be delegated to native platform wrappers rather than cross-platform frameworks.',
      timeline: '6 Months'
    }
  },
  {
    id: 'kora-mtm',
    title: 'Kora MTM',
    tagline: 'Cross-Platform Retail Inventory & Barcode Tracking Client',
    category: ['Flutter', 'Dart', 'Enterprise'],
    overview: 'Kora MTM is an enterprise mobile application designed for retail store staff, enabling multi-dimensional inventory filtering, barcode scanner additions, and offline caching.',
    problem: 'Retail store staff waste time searching for fabric designs and styles. Inventory apps often lag when searching through thousands of items, and network drops in metal warehouse structures disrupt updates.',
    solution: 'Built a cross-platform inventory client using Flutter and Dart. Features multi-dimensional filters (fabric, design, color), barcode scanner inputs, and offline SQLite data caching.',
    responsibilities: [
      'Developed the multi-dimensional product filter layout using responsive Flutter widgets.',
      'Integrated barcode scanning APIs (using mobile cameras and hardware scanner sleeves).',
      'Implemented a local cache layer using SQLite to keep inventory data accessible during warehouse drops.',
      'Designed store order creation and lifecycle status tracking dashboards.'
    ],
    architecture: 'BLoC pattern for reactive state management, integrated with local database managers and REST API repository adapters.',
    techStack: ['Flutter', 'Dart', 'BLoC Pattern', 'SQLite Caching', 'Barcode API', 'REST Client'],
    challenges: 'Handling fast database lookups in a local cache of 50,000+ inventory variations on budget hardware.',
    businessImpact: 'Implemented across 15 retail outlets, reducing stocktake durations from days to hours and ensuring 100% stock tracking accuracy.',
    gallery: [],
    playStore: null,
    detail: {
      overview: 'Kora MTM serves retail associates by showing live stock counts, locating products, and tracking orders. Store staff scan barcodes to log item sales or check incoming shipments.',
      businessProblem: 'Metal-lined retail warehouses caused frequent cellular deadzones. Staff had to walk to the storefront to confirm stock counts or process barcode scans, delaying customer checkouts.',
      architecture: 'Uses a SQLite database containing the full inventory list. Changes are queued in a pending changes table. A background sync worker uploads queue events when connection stabilizes.',
      responsibilities: [
        'Optimized local database indexes in SQLite to support rapid text search.',
        'Wrote custom Flutter camera overlays that highlight barcode targets in real-time.',
        'Built dynamic charts displaying monthly store sales metrics.'
      ],
      techStack: ['Flutter', 'Dart', 'sqflite', 'flutter_bloc', 'Barcode Scanner Plugin', 'Fl Chart'],
      challenges: 'Handling database lockups during heavy background sync cycles when stores open.',
      solutions: 'Configured transaction batches in SQLite and wrote thread locks to prevent write collisons.',
      performance: 'Database query times for searches are under 30ms. Reduced battery draw by disabling camera sensors when scanning completes.',
      lessonsLearned: 'Cross-platform inventory solutions require robust database caching structures to handle cellular dropouts.',
      timeline: '6 Months'
    }
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: 'Production Apps Published',
    metric: '20+',
    timeline: '2022 - Present',
    description: 'Shipped and maintained over 20 production-grade mobile applications on the Google Play Store across multiple domains, including agri-tech, healthcare, and social networks.'
  },
  {
    id: 'ach-2',
    title: 'Total Play Store Downloads',
    metric: '1.6M+',
    timeline: 'Combined Portfolio',
    description: 'Contributed to projects reaching millions of users worldwide, including a 500K+ astrology platform and a 100K+ agricultural companion app.'
  },
  {
    id: 'ach-3',
    title: 'Third-Party SDK Integrations',
    metric: '12+',
    timeline: 'Technical Scope',
    description: 'Integrated complex packages (Agora RTC/RTM, TensorFlow Lite, WebSockets, Bluetooth BLE, Google Maps, Firebase Suite) with zero major post-launch incidents.'
  },
  {
    id: 'ach-4',
    title: 'Engineering Leadership',
    metric: '4 Devs',
    timeline: 'Redspark Technologies',
    description: 'Led and mentored a team of 4 junior developers for 7 months, running sprint planning, code review pipelines, and driving on-time feature delivery.'
  }
];

export const EDUCATION = [
  {
    degree: 'B.Tech in Information Technology',
    school: 'U.V. Patel College of Engineering, Ganpat University',
    timeline: '2018 – 2022',
    grade: 'CGPA: 7.84 / 10'
  },
  {
    degree: 'HSC (Science)',
    school: 'GSHEB Board',
    timeline: '2018',
    grade: '61.10%'
  }
];

export const CERTIFICATIONS = [
  {
    title: 'Android App Development Master Course with Java',
    issuer: 'Udemy'
  },
  {
    title: 'The Complete Android Kotlin Developer Course',
    issuer: 'Udemy'
  },
  {
    title: 'Introduction to Flutter Course',
    issuer: 'Simplilearn | SkillUp'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '2018',
    title: 'Academic Foundations',
    description: 'Began B.Tech in Information Technology at Ganpat University, focusing on algorithms, database design, and software engineering.',
    type: 'education'
  },
  {
    year: '2022',
    title: 'Junior Mobile Developer - Rydot Infotech',
    description: 'Started professional career. Architected and built 10+ Android & Flutter apps, including Divine Talk (500K+ downloads) and Adama Farmer Reach.',
    type: 'work'
  },
  {
    year: '2024',
    title: 'SDK Development & AI Workflows',
    description: 'Authored custom WebSocket Chat SDKs and pioneered AI-assisted development tools to speed up feature iterations.',
    type: 'project'
  },
  {
    year: '2025',
    title: 'Senior Developer & Team Lead - Redspark Technologies',
    description: 'Promoted to Senior Android / Flutter Developer. Assumed leadership of a 4-person engineering team. Architected BGB (Accessibility Service spam blocker) and Mehanii.',
    type: 'work'
  },
  {
    year: 'Present',
    title: 'Scaling Mobile Solutions',
    description: 'Designing offline-first mobile systems, real-time audio/video networks, and AI-enabled client integrations for enterprise clients.',
    type: 'achievement'
  }
];
