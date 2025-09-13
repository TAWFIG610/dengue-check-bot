import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ClipboardList, AlertTriangle, Stethoscope } from "lucide-react";

const Help = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">دليل الاستخدام والمساعدة</h1>
        <p className="text-lg text-muted-foreground">
          تعلم كيفية استخدام نظام تشخيص حمى الضنك بشكل صحيح
        </p>
      </div>

      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>تنبيه مهم جداً</AlertTitle>
        <AlertDescription>
          هذا النظام هو أداة مساعدة للتشخيص الأولي فقط. لا يُغني عن استشارة الطبيب المختص أو الفحوصات الطبية.
          في حالة ظهور أعراض شديدة أو الشك في الإصابة، راجع الطبيب فوراً.
        </AlertDescription>
      </Alert>

      {/* How to Use */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">كيفية استخدام النظام</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <CardTitle>انتقل إلى صفحة التشخيص</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                اضغط على زر "ابدأ التشخيص" من الصفحة الرئيسية أو "التشخيص" من القائمة العلوية
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <CardTitle>املأ البيانات الأساسية</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                أدخل العمر والجنس. هذه المعلومات مهمة لدقة التشخيص
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <CardTitle>أدخل القياسات الحيوية</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                قس درجة الحرارة بدقة وأدخل نتائج فحص الدم إن توفرت (عدد الصفائح الدموية)
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <CardTitle>حدد الأعراض</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                اختر جميع الأعراض التي تعاني منها حالياً. كن دقيقاً في الاختيار
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <CardTitle>احصل على النتيجة</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>
                راجع النتيجة والتوصيات بعناية. اتبع الإرشادات المقترحة
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">أمثلة على البيانات المطلوبة</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-primary" />
                <CardTitle>درجة الحرارة</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>طبيعية:</span>
                  <span className="text-success">36.5 - 37.2°C</span>
                </div>
                <div className="flex justify-between">
                  <span>حمى خفيفة:</span>
                  <span className="text-orange-500">37.3 - 38.0°C</span>
                </div>
                <div className="flex justify-between">
                  <span>حمى متوسطة:</span>
                  <span className="text-danger">38.1 - 39.0°C</span>
                </div>
                <div className="flex justify-between">
                  <span>حمى عالية:</span>
                  <span className="text-danger">أكثر من 39.0°C</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <ClipboardList className="h-6 w-6 text-primary" />
                <CardTitle>عدد الصفائح الدموية</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>طبيعي:</span>
                  <span className="text-success">150,000 - 450,000</span>
                </div>
                <div className="flex justify-between">
                  <span>منخفض قليلاً:</span>
                  <span className="text-orange-500">100,000 - 149,000</span>
                </div>
                <div className="flex justify-between">
                  <span>منخفض جداً:</span>
                  <span className="text-danger">أقل من 100,000</span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  * يُقاس بعدد الخلايا لكل ميكروليتر
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-primary">الأسئلة الشائعة</h2>
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="accuracy" className="border rounded-lg px-4">
            <AccordionTrigger className="text-right">
              ما مدى دقة النظام؟
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              النظام مبني على المعايير الطبية المعتمدة من منظمة الصحة العالمية ولكنه أداة مساعدة فقط.
              دقة التشخيص تعتمد على دقة البيانات المدخلة. النتائج إرشادية وتحتاج لتأكيد طبي.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when-to-see-doctor" className="border rounded-lg px-4">
            <AccordionTrigger className="text-right">
              متى يجب مراجعة الطبيب؟
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              راجع الطبيب فوراً في الحالات التالية:
              • حمى عالية مستمرة
              • نزيف من أي نوع
              • قيء مستمر
              • آلام شديدة في البطن
              • صعوبة في التنفس
              • أو إذا أشار النظام لاحتمال الإصابة
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="no-lab-results" className="border rounded-lg px-4">
            <AccordionTrigger className="text-right">
              ماذا لو لم تتوفر نتائج المختبر؟
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              يمكن استخدام النظام بدون نتائج المختبر، لكن وجودها يزيد من دقة التشخيص.
              إذا لم تتوفر، ركز على دقة الأعراض ودرجة الحرارة.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="children" className="border rounded-lg px-4">
            <AccordionTrigger className="text-right">
              هل يمكن استخدامه للأطفال؟
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              نعم، لكن كن أكثر حذراً مع الأطفال. الأعراض قد تتطور بسرعة أكبر عند الأطفال.
              راجع طبيب الأطفال فوراً عند أي شك في الإصابة.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="prevention" className="border rounded-lg px-4">
            <AccordionTrigger className="text-right">
              كيف أحمي نفسي من حمى الضنك؟
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              أهم طرق الوقاية:
              • القضاء على مصادر تكاثر البعوض (المياه الراكدة)
              • استخدام طارد الحشرات
              • ارتداء ملابس طويلة
              • استخدام الناموسيات
              • الحفاظ على نظافة البيئة المحيطة
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Contact for Emergency */}
      <Alert className="border-danger bg-danger/5">
        <Stethoscope className="h-4 w-4 text-danger" />
        <AlertTitle className="text-danger">في حالات الطوارئ</AlertTitle>
        <AlertDescription>
          لا تعتمد على النظام في الحالات الطارئة. اتصل بالطوارئ الطبية أو توجه لأقرب مستشفى فوراً
          إذا كانت الأعراض شديدة أو تتدهور بسرعة.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Help;