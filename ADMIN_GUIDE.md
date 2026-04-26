# Admin Panel Setup Guide

## 🚀 Quick Start

Your admin panel is ready at: **`http://localhost:3000/admin`**

## 📋 Features

### 1. **Projects Management**
- ✅ Add new projects
- ✏️ Edit existing projects
- 🗑️ Delete projects
- Store project title, description, image, and link

### 2. **Profile Management**
- Update your name, title, and email
- Manage bio and description
- Update years of experience

## 🔧 How to Use

### Adding a Project
1. Go to Admin Dashboard → **Projects** tab
2. Click **"✅ Add Project"** button
3. Fill in the form:
   - Project Title (required)
   - Description (required)
   - Image URL (optional)
   - Project Link (optional)
4. Click **"Add Project"**

### Editing a Project
1. Find the project card in the list
2. Click **"✏️ Edit"** button
3. Modify the fields
4. Click **"Update Project"**

### Deleting a Project
1. Click **"🗑️ Delete"** button on the project card
2. Confirm deletion

### Updating Profile
1. Go to Admin Dashboard → **Profile** tab
2. Fill in your information
3. Click **"Update Profile"**

## 📁 File Structure

```
app/
├── admin/
│   ├── page.tsx (Main dashboard)
│   ├── admin.module.css (Styling)
│   └── components/
│       ├── ProjectForm.tsx
│       ├── ProjectsList.tsx
│       └── ProfileForm.tsx
├── api/
│   ├── projects/
│   │   └── route.ts (Projects API)
│   └── profile/
│       └── route.ts (Profile API)
data/
├── projects.json (Projects data)
└── profile.json (Profile data)
```

## 🔐 Security Notes (For Production)

⚠️ **This is a simple setup for easy management.** For production, consider:

1. **Authentication**: Add login system
   ```typescript
   // Example: Use NextAuth.js
   npm install next-auth
   ```

2. **Database**: Replace JSON files with a real database
   ```typescript
   // Example: Use Prisma
   npm install @prisma/client
   npm install -D prisma
   ```

3. **Environment Variables**: Store sensitive data
   ```bash
   # .env.local
   ADMIN_PASSWORD=your_secure_password
   DATABASE_URL=your_database_url
   ```

4. **Rate Limiting**: Prevent abuse
5. **Validation**: Validate all inputs
6. **CORS**: Restrict API access

## 📝 Next Steps

### Option 1: Keep JSON Files (Simple)
- Good for small portfolios
- No additional setup needed
- Just keep using it as is!

### Option 2: Add Database (Recommended for Production)

Install Prisma:
```bash
npm install @prisma/client @prisma/studio
npm install -D prisma
npx prisma init
```

Example `schema.prisma`:
```prisma
model Project {
  id        String     @id @default(cuid())
  title     String
  description String
  imageUrl  String?
  link      String?
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

model Profile {
  id        String     @id @default(cuid())
  name      String
  title     String
  email     String
  bio       String?
  description String?
  yearsOfExperience Int @default(0)
  updatedAt DateTime   @updatedAt
}
```

### Option 3: Add Authentication

Install NextAuth:
```bash
npm install next-auth
```

Create `app/api/auth/[...nextauth]/route.ts` for login protection.

## 🎨 Customization

### Change Admin Route
Edit the file path from `/app/admin/page.tsx` to any other route:
- `/app/dashboard/page.tsx`
- `/app/manage/page.tsx`
- `/app/admin-panel/page.tsx`

### Change Styling
Edit `admin.module.css` to match your portfolio colors.

### Add More Fields
In ProjectForm.tsx or ProfileForm.tsx, add:
```typescript
const [formData, setFormData] = useState({
  // ... existing fields
  newField: '',
});
```

## 📞 API Endpoints

### Projects API
- **GET** `/api/projects` - Get all projects
- **POST** `/api/projects` - Create project
- **PUT** `/api/projects` - Update project
- **DELETE** `/api/projects?id=PROJECT_ID` - Delete project

### Profile API
- **GET** `/api/profile` - Get profile
- **PUT** `/api/profile` - Update profile

## 🐛 Troubleshooting

**Projects not saving?**
- Check if `/data` folder exists
- Ensure file permissions allow write access

**Admin page not loading?**
- Clear browser cache
- Run `npm run dev` again

**API errors?**
- Check browser console for error messages
- Verify JSON data format

---

**Happy managing! 🎉**
