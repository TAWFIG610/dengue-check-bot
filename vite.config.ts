// استيراد إعدادات Vite
import { defineConfig } from "vite";
// إضافة React لمشروع Vite
import react from "@vitejs/plugin-react-swc";
// مكتبة المسارات من Node.js
import path from "path";
// أداة من Lovable لتتبع المكونات أثناء التطوير
import { componentTagger } from "lovable-tagger";

// إعداد Vite
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // يعمل على كل الشبكات
    port: 8080, // المنفذ المحلي
  },
  plugins: [
    react(), // تفعيل React
    mode === "development" && componentTagger(), // يعمل فقط أثناء التطوير
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // استخدام @ بدل مسار src
    },
  },
}));
