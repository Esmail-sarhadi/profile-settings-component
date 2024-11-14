# 🎭 Modern Profile Settings Component

A sophisticated and responsive profile settings component crafted with React and Tailwind CSS, featuring an elegant glassmorphic design with fluid animations and seamless transitions. Perfect for modern web applications requiring user profile management.

![Profile Settings Preview](/image.png)

## ✨ Key Features

- 🎨 Modern glassmorphic UI design with animated gradients and depth effects
- 📱 Fully responsive layout optimized for all screen sizes
- 🖼️ Interactive profile image upload with live preview and drag-and-drop support
- 🔄 Buttery-smooth transitions and intuitive hover effects
- 📝 Comprehensive form validation and efficient state management
- 🎯 Organized tabbed interface for better user experience
- 💫 Dynamic scroll-based navigation with blur effects
- 🎭 Custom form inputs with integrated iconography
- 🌈 Beautiful gradient animations
- 🔒 Secure input handling
- ⚡ Optimized performance
- 🎨 Customizable theming

## 🛠️ Technologies Used

- ⚛️ React 18
- 🎨 Tailwind CSS 3
- 📦 Lucide Icons
- 🪝 React Hooks (useState, useEffect)
- 🔄 Modern JavaScript (ES6+)

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.0.0",
  "lucide-react": "^0.263.1"
}
```

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/esmail-sarhadi/profile-settings-component.git
```

2. Navigate to project directory:
```bash
cd profile-settings-component
```

3. Install core dependencies:
```bash
npm install
```

4. Install required icons:
```bash
npm install lucide-react
```

## 💻 Usage

Import and implement the EditProfile component in your React application:

```jsx
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="app-container">
      <EditProfile />
    </div>
  );
}
```

## 🏗️ Component Structure

The component is built with a modular architecture:

### 📱 Navigation Bar
- Responsive header with scroll effects
- Smooth backdrop blur transitions
- Back navigation button with hover animations

### 👤 Profile Header
- Interactive image upload zone
- Drag and drop support
- Live image preview
- Edit overlay with hover effects

### 📑 Form Sections
1. **Tabbed Interface**
   - Smooth tab switching
   - Animated selection indicators
   - Responsive layout adaptation

2. **Custom Form Inputs**
   - Icon integration
   - Focus states
   - Error handling
   - Validation feedback

3. **Submit Button**
   - Gradient animation
   - Loading state
   - Success feedback

## 📝 Form Fields

### 👤 Personal Information
- Username (required)
- Full Name (required)
- Birth Date (with date picker)
- Gender (select dropdown)
- Bio (multiline text with character count)

### 📞 Contact Information
- Email (with validation)
- Phone (with format checking)
- City (with autocomplete support)

## 🎨 Style Customization

### 🎯 Core Color Scheme
```css
Primary Background: #1B3A5C (Deep Blue)
Primary Accent: #F5B03A (Warm Orange)
Secondary Accent: #E86C3A (Vibrant Orange)
Text: White with opacity variants
```

### 🌈 Gradient Combinations
```css
Background: from-[#8BA3BC] to-transparent
Accent: from-[#963A24] via-[#E86C3A] to-[#F5B03A]
Button: from-[#F5B03A] to-[#E86C3A]
```

## 🔧 Advanced Configuration

### 🎯 Form Validation Rules
```javascript
const validationRules = {
  username: /^[a-zA-Z0-9_]{3,20}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s-]{10,}$/
};
```

### ⚙️ Component Props
```typescript
interface EditProfileProps {
  onSubmit?: (data: FormData) => void;
  initialData?: UserProfile;
  validation?: ValidationRules;
  theme?: ThemeConfig;
}
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch:
```bash
git checkout -b feature/AmazingFeature
```
3. 💾 Commit your changes:
```bash
git commit -m '✨ Add some AmazingFeature'
```
4. 📤 Push to the branch:
```bash
git push origin feature/AmazingFeature
```
5. 🔄 Open a Pull Request

## 📋 Development Tasks

- [ ] Add form validation
- [ ] Implement image cropping
- [ ] Add dark mode support
- [ ] Create mobile-specific optimizations
- [ ] Add unit tests
- [ ] Implement i18n support

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Credits & Acknowledgments

- 🎨 Icons provided by [Lucide Icons](https://lucide.dev/)
- 🎭 Design inspiration from modern glassmorphic UI trends
- 🌟 Special thanks to the React and Tailwind CSS communities

## 👨‍💻 Author

**Esmail Sarhadi**
- 🐱 GitHub: [@esmail-sarhadi](https://github.com/esmail-sarhadi)
- 💼 LinkedIn: [Esmail Sarhadi](https://linkedin.com/in/esmail-sarhadi)
- 📧 Email: [contact@esmailsarhadi.com](mailto:contact@esmailsarhadi.com)

## 🔄 Version History

- 1.0.0 (2024-03-14)
  - 🎉 Initial release
  - ✨ Basic profile editing features
  - 🎨 Glassmorphic UI implementation

## 🐛 Bug Reports

Found a bug? Please open an issue with:
- 🔍 Bug description
- 🔄 Steps to reproduce
- 📱 Environment details

## 💡 Feature Requests

Have an idea? We'd love to hear it! Open an issue with:
- 💭 Feature description
- 🎯 Use case
- 📊 Expected outcome
