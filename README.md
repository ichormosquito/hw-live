# hacker-wackers
518 Security Project

Chosen project: WebDenial

Team members: Chris Dearing, Tina Costanza, Gurleen Rekhi

In general, our WebDenial security project closely follows our goals from our initial report. It’s a streamlined, Mongo database-driven web app capable of generating posts and login authentication.

During development, we scaled back certain features, such as email notification “heartbeats” to test liveness, as well as traffic monitoring, due to the realities of the semester and student life. Even if we noticed attacks in real time, the chance that anyone on our team would be able to drop everything and take immediate defensive measures would be low.

However, sensible security measures remain. All passwords are salted and hashed, and all text input is sanitized to prevent code injection. As it is a NoSQL database, Mongo is resilient in the face of typical SQL attacks.

INSTRUCTIONS:

To run the app, clone the repo, navigate to Frontend, and execute in your terminal:
"npm install”
"npm run build”
"npm run dev”

GITHUB: https://github.com/ichormosquito/hacker-wackers

DEPLOYMENT: https://hacker-wackers-hlm5slp5d-ichormosquitos-projects.vercel.app/
