document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("loading");
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.classList.add("fade-out");
        setTimeout(() => {
            loader.style.display = "none";
            document.querySelector(".container").style.display = "block";
            document.body.classList.remove("loading");
        }, 1000); 
    }, 2000); 
    const moodSelect = document.getElementById("mood");
    const preferenceSelect = document.getElementById("preference");
    const suggestionBox = document.getElementById("suggestion");
    const videoBox = document.getElementById("video-box");
    const ytVideo = document.getElementById("yt-video");
    const themeToggle = document.getElementById("theme-toggle");
    const celebrateBtn = document.getElementById("celebrate-btn");
    document.querySelector("button").addEventListener("click", showSuggestion);
    themeToggle.addEventListener("click", toggleTheme);
    function sleepEmojiConfetti() {
        const emojis = ['💤', '🌙', '🛏️'];
        for (let i = 0; i < 100; i++) {
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            const span = document.createElement("span");
            span.textContent = emoji;
            span.classList.add("emoji-confetti");
            span.style.left = `${Math.random() * 100}vw`;
            span.style.animationDelay = `${Math.random()}s`;
            document.body.appendChild(span);
            setTimeout(() => {
                span.remove();
            }, 3000);
        }
    }
    function showSuggestion() {
        const mood = moodSelect.value;
        const stressBtn = document.getElementById("stress-btn");
        const pref = preferenceSelect.value;
        if (mood === "stressed" && pref === "quote") {
            stressBtn.style.display = "inline-block";
        } else {
            stressBtn.style.display = "none";
        }
        if (!mood || !pref) {
            suggestionBox.innerHTML = "Please select all options.";
            videoBox.style.display = "none";
            celebrateBtn.style.display = "none";
            return;
        }
        if (mood === "tired") {
            suggestionBox.innerHTML = `  <h3 style="color:#4169E1;">🛏️ TAKE A NAP</h3>
        😴💤 You're not a machine. When you're tired, forcing productivity is like compiling broken code—it'll throw errors and drain more energy. So, power down for a while. Even CPUs need cool-down time. Rest now, reboot stronger. ⚡🧠`;
            videoBox.style.display = "none";
            celebrateBtn.style.display = "none";
            sleepEmojiConfetti();
            return;
        }
        if (mood === "happy") {
            celebrateBtn.style.display = "inline-block";
            for (let i = 0; i < 3; i++) {
                setTimeout(() => {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: Math.random() * 0.6 }
                    });
                }, i * 400);
            }
        } else {
            celebrateBtn.style.display = "none";
        }
        if (pref === "quote") {
            const quotes = {
                happy: [
                    "💡 Learn 1 new DSA concept today.",
                    "--",
                    "📚 Try solving a medium/hard-level coding problem.",
                    "--",
                    "📘 Explore <a href='https://roadmap.sh/frontend' target='_blank'>Frontend Roadmap</a>",
                    "📘 Explore <a href='https://roadmap.sh/devops' target='_blank'>Cloud and Devops Roadmap</a>",

                    "📘 Explore <a href='https://github.com/WeMakeDevs/roadmaps/tree/main/Android-Development' target='_blank'>Android Development</a>",

                    "📘 Explore <a href='https://github.com/WeMakeDevs/roadmaps/tree/main/Blockchain' target='_blank'>Blockchain Roadmap</a>",
                ],
                sad: [
                    "📖 Revisit your small wins – check your <a href='https://github.com/' target='_blank'>GitHub</a> contributions.",
                    "--",
                    "🎯 Do a low-effort task like watching a <a href='https://www.youtube.com/@ApnaCollegeOfficial' target='_blank'>tutorial</a>.",
                    "--",
                    "📘 Read a tech success story to feel inspired."
                ],
                stressed: [
                    "✅ Avoid comparing your journey with others by watching on social media, linkedin. Break big goals into tiny tasks, track small wins (they matter a lot!)",
                    "--",
                    "📑Close your IDE (eyes), sit straight and destress now "],
                tired: [
                    "📝 Plan tasks for tomorrow in <a href='https://www.notion.so/' target='_blank'>Notion</a> or Google Tasks.",
                    "--",
                    "🎧 Listen to ambient music while revising notes.",
                    "--",
                    "💤 Take a 20-min nap, then finish a flashcard revision."
                ]
            };
            if (quotes[mood]) {
                suggestionBox.innerHTML ="<u>📈 Productivity Tips:</u><br><br>" +quotes[mood].map(tip => `<li>${tip}</li>`).join('');
            }
            videoBox.style.display = "none";
        }
        else if (pref === "music") {
            const moodSongs = {
                happy: [
                    { title: "Happy - Bollywood theme", url: "https://www.youtube.com/embed/nCKuoRYzAKI", thumbnail: "https://img.youtube.com/vi/nCKuoRYzAKI/hqdefault.jpg" },
                    { title: "beat-funk", url: "https://www.youtube.com/embed/YcTCIMKeiNQ", thumbnail: "https://img.youtube.com/vi/YcTCIMKeiNQ/hqdefault.jpg" }
                ],
                sad: [
                    {
                        title: "Let Her Go – Passenger", url: "https://www.youtube.com/watch?v=RBumgq5yVrA", thumbnail: "https://img.youtube.com/vi/RBumgq5yVrA/hqdefault.jpg"
                    },
                    {
                        title: "Count on Me – Bruno Mars (Supportive vibes)", url: "https://www.youtube.com/watch?v=Yc6T9iY9SOU", thumbnail: "https://img.youtube.com/vi/Yc6T9iY9SOU/hqdefault.jpg"
                    },
                    {
                        title: "sapphire – Arijit Singh", url: "https://www.youtube.com/embed/27ZngM__Xzk", thumbnail: "https://img.youtube.com/vi/27ZngM__Xzk/hqdefault.jpg"
                    },
                    { title: "Believer", url: "https://www.youtube.com/embed/W0DM5lcj6mw", thumbnail: "https://img.youtube.com/vi/W0DM5lcj6mw/hqdefault.jpg" }
                ],
                stressed: [
                    { title: "Kar Har Maidaan Fateh", url: "https://www.youtube.com/embed/9iIX4PBplAY", thumbnail: "https://img.youtube.com/vi/9iIX4PBplAY/hqdefault.jpg" },
                    { title: "Shabashiyan", url: "https://www.youtube.com/embed/oX_iH0CbZzg", thumbnail: "https://img.youtube.com/vi/oX_iH0CbZzg/hqdefault.jpg" },
                    { title: "meditate", url: "https://www.youtube.com/embed/uC1bgHkQvAw", thumbnail: "https://img.youtube.com/vi/uC1bgHkQvAw/hqdefault.jpg" }
                ]
            };
            const songs = moodSongs[mood];
            if (songs) {
                suggestionBox.innerHTML = `
    🎧 Here's a playlist for your mood:<br><br>
    ${songs.map(song => `
        <div>
            <strong>${song.title}</strong><br>
            <a href="${song.url}" target="_blank">
               <img src="${song.thumbnail}" class="responsive-thumb" alt="Thumbnail for ${song.title}">
            </a>
        </div><br>
    `).join('')}
        `;
            } else {
                suggestionBox.innerHTML = "🎵 No songs available for this mood.";            }
            videoBox.style.display = "none";
        }    }
    function toggleTheme() {
        document.body.classList.toggle("dark");
        themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    }
    celebrateBtn.addEventListener("click", () => {
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
        });
    });
});
