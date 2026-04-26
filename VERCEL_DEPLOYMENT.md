# Deploy to Vercel (Free Hosting)

## 🚀 Step-by-Step Deployment

### Step 1: Go to Vercel
Visit: https://vercel.com

### Step 2: Sign Up / Sign In
- Click **"Sign Up"** or **"Sign In"**
- Choose **"Continue with GitHub"**
- Authorize Vercel to access your GitHub account

### Step 3: Import Your Repository
1. Click **"Add New..."** → **"Project"**
2. Select your GitHub account
3. Find and click **"Import"** on your **"Portfolio"** repository
4. Click **"Import"**

### Step 4: Configure Project
The settings should auto-detect:
- **Framework Preset**: Next.js ✅
- **Root Directory**: ./ (default)
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅

All should be pre-filled. Just click **"Deploy"**

### Step 5: Wait for Deployment
- Vercel will build and deploy automatically
- Takes about 2-3 minutes
- You'll see a live URL when done! 🎉

---

## 📋 What You Get (FREE)

✅ **Unlimited deployments**
✅ **Automatic HTTPS**
✅ **Custom domain support**
✅ **Environment variables**
✅ **Edge caching**
✅ **Serverless functions** (for your API routes)

---

## 🔧 Additional Configuration (Optional)

### Add Environment Variables
1. Go to your project in Vercel
2. **Settings** → **Environment Variables**
3. Add any secrets (if needed later)

### Connect Custom Domain
1. **Settings** → **Domains**
2. Add your domain name
3. Update DNS records as shown

### Configure Redirects (if needed)
Create `vercel.json` in your root:

```json
{
  "redirects": [
    {
      "source": "/admin-panel",
      "destination": "/admin"
    }
  ],
  "headers": [
    {
      "source": "/api/:path*",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "no-store"
        }
      ]
    }
  ]
}
```

---

## 📝 Troubleshooting

**Build fails?**
- Check build logs: Click deployment → Logs tab
- Ensure all imports are correct
- Run locally: `npm run build`

**Admin panel not working?**
- Data files stored in Vercel are read-only in production
- Solution: Use a database (see below)

**Environment variables needed?**
- Add in Vercel Settings → Environment Variables
- Reference with `process.env.VARIABLE_NAME`

---

## ⚠️ Important: Data Persistence

**Current Setup (JSON files):**
- Works in development
- ❌ Won't persist in production on Vercel (files reset on redeploy)

### Solution: Use a Free Database

#### Option 1: **MongoDB Atlas** (Easiest)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create a cluster
4. Get connection string
5. Add to Vercel Environment Variables as `MONGODB_URI`

#### Option 2: **Supabase** (PostgreSQL)
1. Go to https://supabase.com
2. Create project
3. Get connection string
4. Install: `npm install @supabase/supabase-js`
5. Use in your API routes

#### Option 3: **Firebase** (Google)
1. Go to https://firebase.google.com
2. Create project
3. Use Firestore or Realtime Database
4. Free tier is generous

---

## 🔄 Auto-Deploy on Push

Once connected to Vercel:
- Every push to GitHub **main** branch auto-deploys
- No manual deployment needed!
- See deployments in Vercel dashboard

**How to deploy changes:**

```bash
# Make changes locally
# Commit and push
git add .
git commit -m "Update portfolio"
git push

# Vercel auto-deploys! 🚀
```

---

## 📊 Monitor Your Site

In Vercel Dashboard:
- **Analytics**: Page views, response times
- **Logs**: Real-time logs
- **Deployments**: History of all deploys
- **Settings**: Configure anything

---

## 💡 Pro Tips

1. **Custom Domain**: Add your domain for free
2. **Automatic Rollback**: Revert to previous version instantly
3. **Preview Deployments**: Deploy preview URLs for pull requests
4. **Edge Functions**: Use Vercel's edge network for APIs

---

## ✅ Summary

| Step | Action |
|------|--------|
| 1 | Go to vercel.com |
| 2 | Sign in with GitHub |
| 3 | Import your Portfolio repo |
| 4 | Click Deploy |
| 5 | Done! 🎉 |

**Your site will be live in minutes!**

---

## 🆘 Need Help?

Your deployed URL will be something like:
```
https://portfolio-ashfaq-chowdhury.vercel.app
```

**Important:** If you use the admin panel, you'll need a database (see solutions above). For now, your portfolio homepage works perfectly!
