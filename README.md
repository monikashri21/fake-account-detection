# fake-account-detection
## 🧠 How It Works
The system detects fake accounts by analyzing user behavior patterns and comparing them with characteristics of genuine users.

Instead of relying on basic profile details, our approach focuses on identifying differences between real user behavior and suspicious or duplicate account patterns.

### 🔍 Detection Parameters:
- 👤 Username Pattern Analysis (identifying fake-like or bot-generated names)
- ⚠️ Suspicious Behavior Indicators (abnormal or non-human-like patterns)
- 📢 Report Count (community-based feedback from users)

### 📊 Risk Scoring Logic:
The system assigns a risk score based on:

- Usernames that contain suspicious keywords (e.g., "fake") or unnatural patterns (random characters, excessive numbers)
- Detection of bot-like or duplicate naming behavior
- Higher report count indicating multiple users have flagged the account as suspicious

Each of these factors increases the overall risk score.

### 🤖 Behavior-Based Analysis:
Real users typically follow natural and meaningful patterns, while fake accounts often show:
- Random or auto-generated usernames
- Repetitive or unnatural structures
- Patterns similar to previously identified fake accounts

The system compares these behaviors to identify possible fake profiles.

### ✅ Decision Rule:
- If Risk Score ≥ Threshold → **FAKE ACCOUNT**
- Else → **REAL ACCOUNT**

This approach makes the system more practical by combining pattern recognition with community-driven reporting, similar to real-world moderation systems.