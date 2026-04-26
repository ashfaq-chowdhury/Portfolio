# SSH Git Setup Guide

## Step 1: Check if you have SSH keys

```bash
ls -la ~/.ssh
```

If you don't see `id_rsa` and `id_rsa.pub`, generate new keys:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Press Enter for default location, then set a passphrase (or leave empty).

Your keys are now in:
- `~/.ssh/id_rsa` (private key - NEVER share)
- `~/.ssh/id_rsa.pub` (public key - add to GitHub)

## Step 2: Add SSH Key to GitHub

1. Copy your public key:
   ```bash
   cat ~/.ssh/id_rsa.pub
   ```

2. Go to GitHub → Settings → SSH and GPG keys → New SSH key

3. Paste the key and save

4. Test connection:
   ```bash
   ssh -T git@github.com
   ```

## Step 3: Initialize Git in Your Project

```bash
cd f:\Office\Portfolio
git init
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

## Step 4: Add Files and Make First Commit

```bash
git add .
git commit -m "Initial commit: Portfolio admin panel setup"
```

## Step 5: Connect to Your GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME`:

```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 6: Verify Connection

```bash
git remote -v
```

You should see:
```
origin  git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git (fetch)
origin  git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git (push)
```

---

## 🚀 Quick Command Summary

```bash
# 1. Initialize repo
cd f:\Office\Portfolio
git init
git config user.name "Your Name"
git config user.email "your@email.com"

# 2. Add and commit
git add .
git commit -m "Initial commit"

# 3. Add SSH remote (replace USERNAME and REPO)
git remote add origin git@github.com:USERNAME/REPO.git
git branch -M main
git push -u origin main
```

## ⚠️ Common Issues

**Connection refused?**
- Ensure SSH key is added to GitHub
- Test: `ssh -T git@github.com`

**Permission denied?**
- Check file permissions: `chmod 600 ~/.ssh/id_rsa`
- Restart SSH agent if needed

**Remote already exists?**
```bash
git remote remove origin
git remote add origin git@github.com:USERNAME/REPO.git
```

---

**Need help? Let me know your GitHub username and repo name, and I can complete the setup!**
