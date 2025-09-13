import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Thermometer, Droplets, Shield, Bug } from "lucide-react";
import symptomsImage from "@/assets/dengue-symptoms.jpg";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">حمى الضنك</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          معلومات شاملة عن حمى الضنك: الأعراض، طرق الانتقال، الوقاية والعلاج
        </p>
      </div>

      {/* What is Dengue */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">ما هي حمى الضنك؟</h2>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              حمى الضنك هي عدوى فيروسية تنتقل عن طريق البعوض، وهي شائعة في المناطق الاستوائية وشبه الاستوائية.
              يحمل البعوض الفيروس من شخص مصاب إلى آخر سليم.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تؤثر حمى الضنك على ملايين الأشخاص حول العالم سنوياً، وقد تكون خطيرة إذا لم تُعالج بشكل صحيح.
            </p>
          </div>
          <div>
            <img 
              src={symptomsImage} 
              alt="أعراض حمى الضنك" 
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">الأعراض الرئيسية</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <Thermometer className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>حمى مرتفعة</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                ارتفاع مفاجئ في درجة الحرارة (38.5°C أو أكثر) قد تستمر لعدة أيام
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>صداع شديد</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                صداع قوي ومستمر، خاصة في مقدمة الرأس وخلف العينين
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <Droplets className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>آلام العضلات</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                آلام شديدة في العضلات والمفاصل، خاصة في الظهر والساقين
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>طفح جلدي</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                طفح أحمر قد يظهر على الوجه والصدر ثم ينتشر إلى باقي الجسم
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <AlertTriangle className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>غثيان وقيء</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                شعور بالغثيان قد يصاحبه قيء، خاصة في الأيام الأولى
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-danger/10 rounded-lg flex items-center justify-center mb-2">
                <Droplets className="h-6 w-6 text-danger" />
              </div>
              <CardTitle>انخفاض الصفائح</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                انخفاض في عدد الصفائح الدموية مما قد يؤدي إلى سهولة النزيف
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transmission */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">طرق الانتقال</h2>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Bug className="h-8 w-8 text-primary" />
              <CardTitle className="text-xl">انتقال عن طريق البعوض</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              ينتقل فيروس حمى الضنك بشكل أساسي عن طريق بعوضة الزاعجة المصرية (Aedes aegypti).
              عندما تلدغ البعوضة شخصاً مصاباً، تحمل الفيروس وتنقله لأشخاص آخرين.
            </p>
            <div className="bg-accent p-4 rounded-lg">
              <h4 className="font-semibold mb-2">مهم للغاية:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>لا ينتقل المرض من شخص لآخر مباشرة</li>
                <li>البعوض ينشط عادة في ساعات النهار</li>
                <li>يفضل البعوض المياه النظيفة الراكدة للتكاثر</li>
                <li>المناطق الحضرية أكثر عرضة للإصابة</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Prevention */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">طرق الوقاية</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-success" />
                <CardTitle>مكافحة البعوض</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• إزالة المياه الراكدة من حول المنزل</li>
                <li>• تفريغ أوعية المياه بانتظام</li>
                <li>• استخدام طارد الحشرات</li>
                <li>• تغطية خزانات المياه</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-success" />
                <CardTitle>الحماية الشخصية</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• ارتداء ملابس طويلة فاتحة اللون</li>
                <li>• استخدام الناموسيات أثناء النوم</li>
                <li>• تجنب الخروج وقت نشاط البعوض</li>
                <li>• استخدام مكيف الهواء إن أمكن</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-primary">العلاج والرعاية</h2>
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>تنبيه طبي مهم</AlertTitle>
          <AlertDescription>
            لا يوجد علاج محدد لحمى الضنك حتى الآن. العلاج يركز على تخفيف الأعراض ومنع المضاعفات.
          </AlertDescription>
        </Alert>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-success">العلاج المنزلي</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• شرب كميات كبيرة من السوائل</li>
                <li>• الراحة الكاملة في السرير</li>
                <li>• تناول مسكنات الألم الآمنة (باراسيتامول)</li>
                <li>• مراقبة الأعراض باستمرار</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-danger">تجنب تماماً</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• الأسبرين وأدوية مضادة للالتهاب</li>
                <li>• الأدوية التي تؤثر على تخثر الدم</li>
                <li>• إهمال شرب السوائل</li>
                <li>• تجاهل علامات الخطر</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Warning Signs */}
      <Alert className="border-danger bg-danger/5">
        <AlertTriangle className="h-4 w-4 text-danger" />
        <AlertTitle className="text-danger">علامات الخطر - اطلب المساعدة فوراً</AlertTitle>
        <AlertDescription>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>آلام شديدة في البطن</li>
            <li>قيء مستمر</li>
            <li>تنفس سريع أو صعوبة في التنفس</li>
            <li>نزيف من الأنف أو اللثة</li>
            <li>تقيؤ دم أو براز أسود</li>
            <li>برودة أو رطوبة الجلد</li>
            <li>انخفاض مفاجئ في درجة الحرارة</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default About;