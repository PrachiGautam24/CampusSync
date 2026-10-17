# Testing New Screens - Troubleshooting Guide

## ✅ Files Created Successfully

1. ✅ `screens/MyProfileScreen.js` - Syntax valid
2. ✅ `screens/SettingsScreen.js` - Syntax valid (fixed unused import)
3. ✅ `screens/ProfileScreen.js` - Updated and valid
4. ✅ `App.js` - Updated with new screens

## 🔧 If Screens Not Opening, Try These Steps:

### Step 1: Restart Development Server
```bash
# Stop the current server (Ctrl+C)
cd "c:\Users\prach\timetable app\CampusSync"
npm start
# Press 'w' for web
```

### Step 2: Clear Cache and Restart
```bash
# Stop server first (Ctrl+C)
cd "c:\Users\prach\timetable app\CampusSync"
npx expo start -c
# Press 'w' for web
```

### Step 3: Hard Refresh Browser
- Press `Ctrl + Shift + R` (Windows)
- Or `Ctrl + F5`
- Or clear browser cache

### Step 4: Check Console for Errors
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Look for any red error messages
4. Share the error message if you see one

## 🎯 Expected Navigation Flow:

```
Bottom Navigation → Profile
  ↓
Profile & Settings Screen (2 options only)
  ├─ Personal Information → My Profile Screen ✅
  │                          - Shows profile picture
  │                          - Shows name and role
  │                          - Shows email, university, department
  │                          - Edit Profile button
  │
  └─ Settings → Settings Screen ✅
                 Account Section:
                 - Personal Information → My Profile
                 - Privacy & Security
                 
                 Preferences Section:
                 - Push Notifications (toggle)
                 - Language
                 
                 Support Section:
                 - Help & Support
                 
                 - Log Out button (red)
```

## 🐛 Common Issues & Solutions:

### Issue 1: "Cannot find module"
**Solution**: Make sure you restarted the dev server after adding new files

### Issue 2: Screen shows white/blank
**Solution**: 
- Check browser console for errors
- Make sure fonts are loaded
- Try clearing cache

### Issue 3: Navigation doesn't work
**Solution**:
- Verify you're clicking the right buttons
- Check that navigation names match in App.js
- Restart dev server

### Issue 4: Styles look wrong
**Solution**:
- Hard refresh browser
- Clear cache
- Restart server

## ✅ Verification Checklist:

- [ ] Restart development server
- [ ] Hard refresh browser (Ctrl+Shift+R)
- [ ] Click Profile from bottom navbar
- [ ] See "Profile & Settings" header
- [ ] See profile card with picture
- [ ] See ONLY 2 menu items (Personal Information, Settings)
- [ ] Click "Personal Information" → Opens My Profile
- [ ] My Profile shows all details
- [ ] Back button works from My Profile
- [ ] Click "Settings" from Profile & Settings
- [ ] Settings screen shows 3 sections
- [ ] Toggle switch works
- [ ] Log Out button visible at bottom

## 📱 What Each Screen Should Show:

### Profile & Settings:
```
Header: "Profile & Settings"
Profile Card: Photo, Name, Role
Menu (2 items):
  1. Personal Information →
  2. Settings →
```

### My Profile:
```
Header: "My Profile"
Profile Picture (large, centered)
Name: Prachi Gautam
Badge: Student · FSD 5
Details Card:
  - Email icon | College Email ID
  - Building icon | University
  - Calendar icon | Department
Edit Profile Button (outlined purple)
```

### Settings:
```
Header: "Settings"

Account
  - Personal Information →
  - Privacy & Security →

Preferences
  - Push Notifications [Toggle]
  - Language: English →

Support
  - Help & Support →

[Log Out] (red button)
Version text
```

## 🔍 If Still Not Working:

Please check:
1. What error message appears in console?
2. Which screen doesn't open?
3. What happens when you click the button?
4. Does any error appear on screen?

Share this information and I can help fix the specific issue!
