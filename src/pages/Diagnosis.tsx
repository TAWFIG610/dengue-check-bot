import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, CheckCircle, Activity } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DiagnosisData {
  fever: string;
  plateletCount: string;
  hasHeadache: boolean;
  hasMusclePain: boolean;
  hasNausea: boolean;
  hasRash: boolean;
  hasEyePain: boolean;
  age: string;
  gender: string;
}

const Diagnosis = () => {
  const [formData, setFormData] = useState<DiagnosisData>({
    fever: "",
    plateletCount: "",
    hasHeadache: false,
    hasMusclePain: false,
    hasNausea: false,
    hasRash: false,
    hasEyePain: false,
    age: "",
    gender: "",
  });

  const [result, setResult] = useState<{ status: "healthy" | "infected" | null; confidence: number }>({
    status: null,
    confidence: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate diagnosis logic
    await new Promise(resolve => setTimeout(resolve, 2000));

    const feverValue = parseFloat(formData.fever);
    const plateletValue = parseFloat(formData.plateletCount);
    
    let score = 0;
    
    // Fever assessment
    if (feverValue >= 38.5) score += 3;
    else if (feverValue >= 37.5) score += 1;
    
    // Platelet count assessment
    if (plateletValue < 100000) score += 4;
    else if (plateletValue < 150000) score += 2;
    
    // Symptoms assessment
    if (formData.hasHeadache) score += 2;
    if (formData.hasMusclePain) score += 2;
    if (formData.hasNausea) score += 1;
    if (formData.hasRash) score += 3;
    if (formData.hasEyePain) score += 2;

    const confidence = Math.min((score / 15) * 100, 95);
    
    setResult({
      status: score >= 6 ? "infected" : "healthy",
      confidence: Math.round(confidence),
    });

    setIsLoading(false);
  };

  const resetForm = () => {
    setFormData({
      fever: "",
      plateletCount: "",
      hasHeadache: false,
      hasMusclePain: false,
      hasNausea: false,
      hasRash: false,
      hasEyePain: false,
      age: "",
      gender: "",
    });
    setResult({ status: null, confidence: 0 });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">تشخيص حمى الضنك</h1>
        <p className="text-lg text-muted-foreground">
          يرجى ملء البيانات التالية بدقة للحصول على تقييم أولي
        </p>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>تنبيه مهم</AlertTitle>
        <AlertDescription>
          هذا النظام مساعد تشخيصي فقط وليس بديلاً عن استشارة الطبيب المختص. 
          في حالة الشك أو ظهور أعراض شديدة، يرجى مراجعة الطبيب فوراً.
        </AlertDescription>
      </Alert>

      <form onSubmit={handleSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الأساسية</CardTitle>
            <CardDescription>بيانات عامة عن المريض</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">العمر</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: e.target.value }))}
                  placeholder="أدخل العمر بالسنوات"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>الجنس</Label>
                <RadioGroup
                  value={formData.gender}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">ذكر</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">أنثى</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>القياسات الحيوية</CardTitle>
            <CardDescription>المؤشرات الطبية المهمة للتشخيص</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fever">درجة الحرارة (°C)</Label>
                <Input
                  id="fever"
                  type="number"
                  step="0.1"
                  value={formData.fever}
                  onChange={(e) => setFormData(prev => ({ ...prev, fever: e.target.value }))}
                  placeholder="مثال: 38.5"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platelet">عدد الصفائح الدموية</Label>
                <Input
                  id="platelet"
                  type="number"
                  value={formData.plateletCount}
                  onChange={(e) => setFormData(prev => ({ ...prev, plateletCount: e.target.value }))}
                  placeholder="مثال: 120000"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>الأعراض المصاحبة</CardTitle>
            <CardDescription>اختر الأعراض التي تعاني منها حالياً</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="headache"
                  checked={formData.hasHeadache}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasHeadache: checked as boolean }))
                  }
                />
                <Label htmlFor="headache">صداع شديد</Label>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="muscle"
                  checked={formData.hasMusclePain}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasMusclePain: checked as boolean }))
                  }
                />
                <Label htmlFor="muscle">آلام العضلات والمفاصل</Label>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="nausea"
                  checked={formData.hasNausea}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasNausea: checked as boolean }))
                  }
                />
                <Label htmlFor="nausea">غثيان وقيء</Label>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="rash"
                  checked={formData.hasRash}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasRash: checked as boolean }))
                  }
                />
                <Label htmlFor="rash">طفح جلدي</Label>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="eyepain"
                  checked={formData.hasEyePain}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, hasEyePain: checked as boolean }))
                  }
                />
                <Label htmlFor="eyepain">ألم خلف العينين</Label>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center gap-4">
          <Button type="submit" variant="medical" size="lg" disabled={isLoading}>
            {isLoading ? (
              <>
                <Activity className="h-4 w-4 ml-2 animate-spin" />
                جاري التشخيص...
              </>
            ) : (
              "تشخيص الحالة"
            )}
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={resetForm}>
            إعادة تعيين
          </Button>
        </div>
      </form>

      {result.status && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {result.status === "healthy" ? (
                <CheckCircle className="h-6 w-6 text-success" />
              ) : (
                <AlertCircle className="h-6 w-6 text-danger" />
              )}
              نتيجة التشخيص
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className={`text-2xl font-bold ${
                result.status === "healthy" ? "text-success" : "text-danger"
              }`}>
                {result.status === "healthy" ? "غالباً سليم" : "يُحتمل الإصابة"}
              </div>
              
              <p className="text-muted-foreground">
                مستوى الثقة: {result.confidence}%
              </p>
              
              <Separator />
              
              <div className="space-y-2">
                <h4 className="font-semibold">التوصيات:</h4>
                {result.status === "healthy" ? (
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>استمر في مراقبة الأعراض</li>
                    <li>حافظ على شرب السوائل</li>
                    <li>راجع الطبيب إذا ساءت الأعراض</li>
                  </ul>
                ) : (
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li className="text-danger font-medium">راجع الطبيب فوراً</li>
                    <li>اشرب كميات كبيرة من السوائل</li>
                    <li>تجنب الأسبرين</li>
                    <li>راقب أعراض النزيف</li>
                  </ul>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Diagnosis;