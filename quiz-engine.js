// مصفوفة الأسئلة الـ 20 لـ منصة كسال ميديا
const kselQuestions = [
    { q: "ما هي القاعدة الأساسية لتكوين الصورة وتوزيع العناصر؟", o: ["قاعدة المربعات", "قاعدة الأثلاث", "قاعدة الوسط"], a: 1 },
    { q: "في التصوير، ما هو العنصر المسؤول عن 'عزل الخلفية' (الـ Bokeh)؟", o: ["سرعة الغالغ", "فتحة العدسة (Aperture)", "الـ ISO"], a: 1 },
    { q: "ماذا يسمى الانتقال المباشر بين مشهدين في المونتاج؟", o: ["Dissolve", "Cut", "Fade"], a: 1 },
    { q: "أي إعداد في الكاميرا يؤدي زيادته المفرطة إلى ظهور 'نويز' (Noise) في الصورة؟", o: ["الـ ISO", "الفوكس", "توازن الأبيض"], a: 0 },
    { q: "ما هو الوقت المثالي للتصوير الخارجي بضوء طبيعي ناعم؟", o: ["وقت الظهيرة", "الساعة الذهبية (قبل الغروب)", "منتصف الليل"], a: 1 },
    { q: "في الصحافة، ماذا يعني مصطلح 'الهرم المقلوب'؟", o: ["كتابة الخاتمة أولاً", "البدء بأهم المعلومات ثم التفاصيل", "كتابة المقال بدون عنوان"], a: 1 },
    { q: "ما هي وظيفة ميكروفون الـ 'Shotgun'؟", o: ["التقاط الصوت من جميع الاتجاهات", "التقاط الصوت من اتجاه واحد محدد", "تسجيل الموسيقى فقط"], a: 1 },
    { q: "ما هو الـ Framing في عالم السينما؟", o: ["تأطير المشهد وتحديد ما يظهر للمشاهد", "تغيير بطارية الكاميرا", "كتابة السيناريو"], a: 0 },
    { q: "ما هي 'الكروما' (Chroma Key)؟", o: ["نوع من العدسات", "خلفية خضراء أو زرقاء لعزل العناصر", "إضاءة قوية جداً"], a: 1 },
    { q: "برنامج 'Adobe Premiere Pro' متخصص في ماذا؟", o: ["تعديل الصور", "المونتاج وتحرير الفيديو", "تصميم اللوغو"], a: 1 },
    { q: "ماذا تعني دقة '4K' في عالم الفيديو؟", o: ["أربعة آلاف بكسل عرضاً تقريباً", "أربع دقائق من الفيديو", "أربع طبقات من الصوت"], a: 0 },
    { q: "ما هي وظيفة الـ 'Storyboard'؟", o: ["تخزين الفيديو", "رسم تخطيطي للمشاهد قبل تصويرها", "تعديل ألوان الفيلم"], a: 1 },
    { q: "أي عدسة تعطي زاوية رؤية واسعة جداً (Wide)؟", o: ["85mm", "16mm", "200mm"], a: 1 },
    { q: "ما هو الـ Podcast؟", o: ["بث إذاعي رقمي عبر الإنترنت", "جهاز لتثبيت الكاميرا", "نوع من الورق الصحفي"], a: 0 },
    { q: "في المونتاج، ماذا يعني مصطلح 'Color Grading'؟", o: ["قص الفيديو", "تلوين الفيديو وإعطاؤه طابعاً سينمائياً", "تسجيل الصوت"], a: 1 },
    { q: "ما هي سرعة الإطارات (Frame Rate) المعتادة في السينما؟", o: ["60 fps", "24 fps", "120 fps"], a: 1 },
    { q: "ما هي 'اللقطة القريبة جداً' (Extreme Close-up)؟", o: ["تظهر الشخص من بعيد", "تظهر تفاصيل دقيقة كالعين أو الأصابع", "تظهر المنظر الطبيعي"], a: 1 },
    { q: "ما وظيفة الـ ND Filter في الكاميرا؟", o: ["زيادة الإضاءة", "تقليل كمية الضوء (نظارة شمسية للعدسة)", "تغيير الألوان"], a: 1 },
    { q: "ماذا نعني بالـ B-Roll في صناعة الأفلام؟", o: ["المشاهد الأساسية", "المشاهد الثانوية والتوضيحية", "كواليس الفيلم"], a: 1 },
    { q: "أهم ركيزة في 'كسال ميديا' هي:", o: ["المعدات الغالية", "المصداقية وثبات الجبل", "السرعة بدون تثبت"], a: 1 }
];

// كود بناء الواجهة والشهادة
const quizSectionHTML = `
<section id="quiz-section" style="padding: 60px 5%; background: #0a192f; color: white; text-align: center; border-top: 5px solid #c5a059;">
    <div id="quiz-container" style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 25px; color: #0a192f; box-shadow: 0 15px 40px rgba(0,0,0,0.5);">
        <h2 style="font-family: 'Changa'; font-size: 2rem; margin-bottom: 20px;">اختبار الكفاءة الإعلامية</h2>
        <p id="quiz-intro" style="font-size: 1.1rem; color: #64748b; margin-bottom: 30px;">يا مبدع، اجتز هذا الاختبار (20 سؤالاً) لتثبت جدارتك وتحصل على شهادة العضوية الرسمية.</p>
        <div id="question-box" style="display:none; text-align: right;">
            <div style="background: #f1f5f9; padding: 15px; border-radius: 10px; margin-bottom: 25px;">
                <h4 id="q-text" style="font-size: 1.3rem; line-height: 1.6;"></h4>
            </div>
            <div id="options-grid" style="display: grid; grid-template-columns: 1fr; gap: 12px;"></div>
        </div>
        <button id="start-btn" onclick="startKselQuiz()" style="padding: 18px 50px; background: #c5a059; border: none; color: #0a192f; border-radius: 12px; cursor: pointer; font-weight: 900; font-size: 1.2rem; font-family: 'Cairo';">ابدأ الاختبار الآن</button>
    </div>
    <div id="cert-preview-area" style="display:none; margin-top: 50px;">
        <div id="ksel-cert" style="width: 850px; height: 600px; background: #fff; border: 15px double #c5a059; margin: 0 auto; padding: 50px; position: relative; color: #0a192f; font-family: 'Amiri', serif; box-sizing: border-box; text-align:center;">
             <div style="border: 2px solid #c5a059; height: 100%; padding: 30px;">
                 <h1 style="font-family: 'Aref Ruqaa'; font-size: 4rem; margin: 0;">شهادة إنضمام</h1>
                 <p style="font-size: 1.8rem; margin-top: 20px;">تتشرف منصة كسال ميديا بمنح هذه الشهادة للمبدع(ة):</p>
                 <h2 id="c-name" style="font-family: 'Aref Ruqaa'; color: #c5a059; font-size: 3.5rem; margin: 20px 0;"></h2>
                 <p style="font-size: 1.5rem;">نظير اجتيازه بنجاح لاختبار الكفاءة الإعلامية بصفة:</p>
                 <h3 id="c-role" style="font-size: 2rem; color: #0a192f;"></h3>
                 <div style="margin-top: 60px; display: flex; justify-content: space-around; font-weight: bold; font-size: 1.2rem;">
                    <div><p>المشرف العام</p><p style="color: #c5a059;">مسعدي فؤاد</p></div>
                    <div><p>المسؤول التقني</p><p style="color: #c5a059;">خالد</p></div>
                 </div>
             </div>
        </div>
        <button onclick="saveKselCert()" style="margin-top: 30px; padding: 20px 40px; background: #10b981; color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold; font-size: 1.2rem;">تحميل الشهادة PNG</button>
    </div>
</section>`;

// هذا السطر يضمن ظهور الاختبار آلياً في أسفل الصفحة
document.write(quizSectionHTML);

let qIndex = 0; let qScore = 0;

function startKselQuiz() {
    const n = document.getElementById('inName').value;
    if(!n || n.length < 3) return alert("يا بن العم، عمر اسمك في الاستمارة الفوق أولاً!");
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('quiz-intro').style.display = 'none';
    document.getElementById('question-box').style.display = 'block';
    loadQ();
}

function loadQ() {
    if(qIndex >= kselQuestions.length) return endQuiz();
    const q = kselQuestions[qIndex];
    document.getElementById('q-text').innerText = `${qIndex + 1}. ${q.q}`;
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    q.o.forEach((opt, i) => {
        const b = document.createElement('button');
        b.innerText = opt;
        b.style = "padding: 15px; border: 2px solid #e2e8f0; background: white; cursor: pointer; border-radius: 12px; font-family: 'Cairo'; text-align: right; font-weight: 600;";
        b.onclick = () => { if(i === q.a) qScore++; qIndex++; loadQ(); };
        grid.appendChild(b);
    });
}

function endQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    if(qScore >= 14) {
        document.getElementById('cert-preview-area').style.display = 'block';
        document.getElementById('c-name').innerText = document.getElementById('inName').value;
        document.getElementById('c-role').innerText = document.getElementById('inRole').value;
    } else {
        alert(`نتيجتك هي ${qScore} من 20. عاود جرب مرة أخرى!`);
        location.reload();
    }
}

function saveKselCert() {
    html2canvas(document.querySelector("#ksel-cert"), { scale: 2 }).then(canvas => {
        let l = document.createElement('a');
        l.download = 'Kessal_Certificate.png';
        l.href = canvas.toDataURL();
        l.click();
    });
}
