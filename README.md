● Project name: KeenKeeper

● Description: 
KeenKeeper is a React-based friendship tracking application designed to help users maintain meaningful relationships. It allows users to track interactions such as calls, texts and video chats, view detailed friend profiles and analyze communication patterns through simple visual analytics.


● Technologies Used
(1) React.js
(2) React Router DOM
(3) Tailwind CSS
(4) DaisyUI
(5) Recharts


● Key Features
1. Friend Management System:
KeenKeeper displays a list of friends stored in a JSON file. Each friend card shows important details such as profile picture, name, tags (e.g., college, work, close friend), current relationship status (overdue, almost due, or on-track), and the number of days since last contact. Users can click on any friend card to open a detailed profile page.

2. Detailed Friend Profile Page:
Each friend has a details page with a two-column layout. The left side shows complete profile information including bio, email, tags, and status. The right side contains stats cards, a relationship goal section, and a quick check-in feature where users can log interactions such as Call, Text, or Video.When any of these check-in actions are clicked, a timeline entry is created automatically and a toast notification is displayed to confirm the action giving instant feedback to the user.

3. Timeline System:
All interactions made from the Friend Details page are automatically stored in a timeline page. Each entry records the type of interaction, the friend's name and the date. Users can view a complete history of their communication and filter it by Call, Text, or Video to easily track relationship activity.

4. Friendship Analytics Dashboard:
The Stats page visualizes user interaction data using a pie chart built with Recharts. It shows the distribution of calls, texts and video interactions, giving users a clear overview of how they communicate with their friends over time.