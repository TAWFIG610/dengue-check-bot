import { Link, useLocation } from "react-router-dom";
import { Activity, Home, ClipboardList, Info, HelpCircle, Mail } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  const navigation = [
    { name: "الرئيسية", href: "/", icon: Home },
    { name: "التشخيص", href: "/diagnosis", icon: ClipboardList },
    { name: "عن المرض", href: "/about", icon: Info },
    { name: "المساعدة", href: "/help", icon: HelpCircle },
    { name: "تواصل معنا", href: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="bg-primary shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-primary-foreground" />
              <h1 className="text-xl font-bold text-primary-foreground">تشخيص حمى الضنك</h1>
            </div>
            
            <div className="hidden md:flex space-x-reverse space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "bg-primary-light text-primary-foreground"
                        : "text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-light/50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-muted-foreground space-y-4">
            <p className="font-semibold">© 2025 مشروع: نظام تشخيص مرض حمى الضنك باستخدام تقنيات التعلم الآلي</p>
            <div className="text-sm space-y-1">
              <p className="font-medium">تم تطويره بواسطة فريق العمل:</p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-1">
                <span>• أماني عبدالقادر أحمد عيسى</span>
                <span>• إيلاف محمد كرار الأمين</span>
                <span>• سامية إدريس عثمان همد</span>
                <span>• عائشة أيوب صالح علي</span>
              </div>
              <p className="italic mt-2">كلية علوم الحاسوب – الجامعة</p>
            </div>
            <p className="text-sm mt-4 pt-4 border-t border-border">
              تنبيه: هذا النظام مساعد تشخيصي وليس بديلاً عن استشارة الطبيب المختص
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;