# manna-glass-site

واجهة عربية حديثة ومتجاوبة لشركة **محمد مناع للزجاج** (صفحة رئيسية واحدة RTL) مع أقسام المنتجات، الفروع، نموذج طلب عرض سعر (واتساب فقط) ومساعد اختيار الزجاج.

## التشغيل محليًا

لا يحتاج المشروع Backend أو أدوات بناء معقدة.

### خيار سريع
1. افتح الملف مباشرة: `/home/runner/work/manna-glass-site/manna-glass-site/index.html`

### خيار عبر خادم محلي
```bash
cd /home/runner/work/manna-glass-site/manna-glass-site
python3 -m http.server 8080
```
ثم افتح: `http://localhost:8080`

## البناء

لا توجد عملية build حالية. المشروع يعتمد على HTML/CSS/JS ثابت.

## أين أعدّل البيانات؟

كل بيانات الشركة الأساسية موجودة في ملف:
- `/home/runner/work/manna-glass-site/manna-glass-site/script.js`

داخل الكائن `siteData`:
- `stats`: أرقام (التأسيس، الموظفين، العملاء، الفروع، الخبرة)
- `products`: المنتجات والوصف والاستخدام
- `advisor`: توصيات مساعد اختيار الزجاج
- `branches`: بيانات الفروع (المدينة، العنوان، الهواتف، ساعات العمل)
- `warehouses`: بيانات مستودعات بيع الزجاج الخام

## النموذج (Quote Form)

النموذج لا يرسل إلى خادم. عند الإرسال:
- يتحقق من الحقول في المتصفح
- ينشئ رسالة واتساب مسبقة
- يفتح الرابط الرسمي: `https://wa.me/966554348100`

## الملفات الرئيسية

- `/home/runner/work/manna-glass-site/manna-glass-site/index.html`
- `/home/runner/work/manna-glass-site/manna-glass-site/styles.css`
- `/home/runner/work/manna-glass-site/manna-glass-site/script.js`
