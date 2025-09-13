import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Shield, Stethoscope } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-l from-primary-lighter to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                نظام تشخيص
                <span className="text-primary block">حمى الضنك</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                أداة مساعدة ذكية للتشخيص المبكر لحمى الضنك باستخدام البيانات الطبية والأعراض.
                احصل على تقييم أولي سريع ودقيق.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="medical" size="lg" className="text-lg px-8 py-6">
                  <Link to="/diagnosis">
                    <Activity className="h-5 w-5 ml-2" />
                    ابدأ التشخيص الآن
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/about">
                    تعرف على المرض
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

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-border">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">تشخيص سريع</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                احصل على نتائج التشخيص في ثوانٍ معدودة باستخدام خوارزميات متقدمة
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-border">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-success" />
              </div>
              <CardTitle className="text-xl">دقة عالية</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                مبني على دراسات طبية موثقة ومعايير منظمة الصحة العالمية
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-border">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Stethoscope className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">إرشاد طبي</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                توصيات واضحة حول الخطوات التالية والحاجة لاستشارة طبية
              </CardDescription>
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
              <Activity className="h-5 w-5 ml-2" />
              ابدأ التشخيص الآن
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;