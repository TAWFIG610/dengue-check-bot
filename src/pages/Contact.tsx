import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">تواصل معنا</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          نحن هنا لمساعدتك. تواصل معنا لأي استفسارات حول النظام أو حمى الضنك
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                أرسل لنا رسالة
              </CardTitle>
              <CardDescription>
                املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">الاسم الكامل</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="أدخل اسمك الكامل"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">موضوع الرسالة</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="ما هو موضوع رسالتك؟"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">الرسالة</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" variant="medical">
                  <Send className="h-4 w-4 ml-2" />
                  إرسال الرسالة
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>معلومات التواصل</CardTitle>
              <CardDescription>
                يمكنك التواصل معنا عبر الطرق التالية
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground">samiaomram2233@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">الهاتف</h3>
                  <p className="text-muted-foreground">0906250114</p>
                  <p className="text-muted-foreground">متاح: الأحد - الخميس، 8 ص - 6 م</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">العنوان</h3>
                  <p className="text-muted-foreground">
                    كلية علوم الحاسوب<br />
                    الجامعة
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medical Advisory */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-primary">استشارة طبية عاجلة</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                في حالة ظهور أعراض شديدة أو الحاجة لاستشارة طبية عاجلة، 
                لا تتردد في التواصل مع الخدمات الطبية الطارئة.
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-danger">رقم الطوارئ: 997</p>
                <p className="font-semibold text-primary">الخط الساخن للاستشارات: 937</p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Reference */}
          <Card>
            <CardHeader>
              <CardTitle>هل تحتاج مساعدة سريعة؟</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                قد تجد إجابة سؤالك في صفحة المساعدة والأسئلة الشائعة
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/help">
                  صفحة المساعدة
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Disclaimer */}
      <Card className="border-muted bg-muted/20">
        <CardContent className="pt-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold">إخلاء مسؤولية</h3>
            <p className="text-sm text-muted-foreground">
              المعلومات المقدمة في هذا الموقع هي لأغراض تعليمية وإرشادية فقط. 
              لا تُعتبر بديلاً عن الاستشارة الطبية المتخصصة أو التشخيص أو العلاج الطبي.
              استشر دائماً طبيبك أو مقدم الرعاية الصحية المؤهل قبل اتخاذ أي قرارات متعلقة بصحتك.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;