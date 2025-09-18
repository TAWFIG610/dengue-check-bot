import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
import logoImage from "@/assets/logo.jpg";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-l from-primary-lighter to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <img 
                  src={logoImage} 
                  alt="شعار نظام تشخيص حمى الضنك" 
                  className="w-24 h-24 object-contain"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                نظام ذكي لتشخيص حمى الضنك 
                <span className="text-primary block">باستخدام تقنيات التعلم الآلي</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                هذا النظام يساعد على التنبؤ بإصابة المريض بحمى الضنك بناءً على بياناته الطبية
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="medical" size="lg" className="text-lg px-8 py-6">
                  <Link to="/diagnosis">
                    🧪 ابدأ التشخيص
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/about">
                    📖 عن المرض
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:order-first">
              <img 
                src={heroImage} 
                alt="التشخيص الطبي" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            لماذا تختار نظامنا؟
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            نظام متطور يجمع بين الذكاء الاصطناعي والخبرة الطبية لتقديم تشخيص دقيق وسريع
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <CardTitle className="text-lg">ابدأ التشخيص</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/diagnosis">انقر هنا</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📖</span>
              </div>
              <CardTitle className="text-lg">عن المرض</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/about">تعلم المزيد</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">❓</span>
              </div>
              <CardTitle className="text-lg">المساعدة</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/help">كيفية الاستخدام</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center border-border hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <CardTitle className="text-lg">تواصل معنا</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact">اتصل بنا</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل تشك في إصابتك بحمى الضنك؟
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            لا تتردد في استخدام نظامنا للحصول على تقييم أولي. التشخيص المبكر مهم جداً لصحتك.
          </p>
          <Button asChild variant="medical" size="lg" className="text-lg px-12 py-6">
            <Link to="/diagnosis">
              🧪 ابدأ التشخيص الآن
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;