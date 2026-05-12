// كود اختبار كسال ميديا (20 سؤال + شهادة)
const kselQuestions = [
    { q: "ما هي أهم صفة يجب أن يتحلى بها الإعلامي في 'كسال ميديا'؟", o: ["السرعة بدون تثبت", "المصداقية والأمانة", "نشر الإشاعات"], a: 1 },
    { q: "ماذا يسمى اختصار الوقت في الفيديو لإيصال فكرة سريعة؟", o: ["المونتاج", "التصوير المبطئ", "الزووم"], a: 0 },
    { q: "في صناعة المحتوى، ماذا يعني مصطلح (Target Audience)؟", o: ["الجمهور المستهدف", "معدات التصوير", "مكان التصوير"], a: 0 },
    { q: "أي وسيلة إعلامية تعتمد بشكل أساسي على 'الصوت' فقط؟", o: ["التلفزيون", "البودكاست", "السينما"], a: 1 },
    { q: "ما هي القاعدة التي تقسم الصورة إلى 9 مربعات لتوزيع العناصر؟", o: ["قاعدة الأثلاث", "قاعدة الوسط", "قاعدة الألوان"], a: 0 },
    { q: "ما هو دور 'السيناريو' في إنتاج الفيديو؟", o: ["تعديل الألوان", "المخطط المكتوب للقصة", "تثبيت الكاميرا"], a: 1 },
    { q: "ماذا نعني بـ 'كروما' في استوديوهات التصوير؟", o: ["الخلفية الخضراء لعزل الممثل", "نوع من الميكروفونات", "إضاءة الشمس"], a: 0 },
    { q: "ما هو البرنامج الأشهر عالمياً لتحرير الصور الفوتوغرافية؟", o: ["فوتوشوب", "بريمير", "إكسل"], a: 0 },
    { q: "أي ميكروفون يفضل استخدامه في المقابلات الخارجية لتقليل الضجيج؟", o: ["Shotgun", "ميكروفون الهاتف", "السماعات"], a: 0 },
    { q: "ماذا تعني دقة 4K في عالم الفيديو؟", o: ["جودة منخفضة", "جودة عالية جداً", "قياس الصوت"], a: 1 },
    { q: "ما هو الـ B-roll في المونتاج؟", o: ["المشاهد الثانوية التوضيحية", "المشهد الأساسي", "شاشة التوقف"], a: 0 },
    { q: "أفضل وقت للتصوير بضوء طبيعي ناعم يسمى:", o: ["وقت الظهيرة", "الساعة الذهبية", "منتصف الليل"], a: 1 },
    { q: "ما هي وظيفة المخرج في الفريق الإعلامي؟", o: ["تنظيف المعدات", "قيادة الرؤية الفنية للعمل", "كتابة الخبر فقط"], a: 1 },
    { q: "في الصحافة الإلكترونية، ما أهمية 'العنوان'؟", o: ["ليس له أهمية", "جذب القارئ وتلخيص المحتوى", "ملء الفراغ فقط"], a: 1 },
    { q: "ماذا يعني مصطلح 'لوغو' (Logo)؟", o: ["الشعار البصري للمنصة", "اسم المذيع", "نوع الكاميرا"], a: 0 },
    { q: "ما هو 'الفوكس' (Focus) في الكاميرا؟", o: ["وضوح العنصر المراد تصويره", "سرعة الفيديو", "قوة الصوت"], a: 0 },
    { q: "ماذا تسمى اللقطة التي تظهر مشهداً واسعاً جداً للمكان؟", o: ["Wide Shot", "Close Up", "Macro"], a: 0 },
    { q: "أي منصة تعتبر الأقوى حالياً للفيديوهات القصيرة (Reels)؟", o: ["إنستغرام/تيك توك", "الإيميل", "المدونات النصية"], a: 0 },
    { q: "ما هي وظيفة 'توازن الأبيض' (White Balance) في التصوير؟", o: ["تعديل الألوان لتكون طبيعية", "تكبير الصورة", "تسريع المونتاج"], a: 0 },
    { q: "كسال ميديا تستلهم اسمها وثباتها من:", o: ["جبل كسال التاريخي بالبيض", "نهر مشهور", "غابة عشوائية"], a: 0 }
];

const quizAndCertHTML = `
<section id="ksel-final" style="padding: 60px 5%; background: #0a192f; color: white; text-align: center; border-top: 5px solid #c5a059;">
    <div id="quiz-container" style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 25px; color: #0a192f;">
        <h2 style="font-family: 'Changa'; margin-bottom: 20px;">اختبار الكفاءة (20 سؤال)</h2>
        <div id="q-content">
            <h4 id="q-text" style="font-size: 1.3rem; margin-bottom: 25px; line-height: 1.6;">هل أنت مستعد لنيل شهادة انضمامك لكسال ميديا؟</h4>
            <div id="options-area" style="display: grid; gap: 12px;"></div>
        </div>
        <button id="start-quiz-btn" onclick="beginQuiz()" style="padding: 15px 40px; background: #c5a059; border: none; border-radius: 10px; cursor: pointer; font-weight: bold; margin-top: 20px; font-family: 'Cairo';">ابدأ الاختبار الآن</button>
    </div>

    <div id="cert-area" style="display:none; margin-top: 50px;">
        <div id="final-cert" style="width: 800px; height: 550px; background: #fff; border: 15px double #c5a059; margin: 0 auto; padding: 40px; position: relative; color: #0a192f; font-family: 'Amiri', serif; box-sizing: border-box;">
            <div style="border: 2px solid #c5a059; height: 100%; padding: 20px; text-align: center;">
                <h1 style="font-family: 'Aref Ruqaa'; font-size: 3.5rem; margin: 0;">شهادة انضمام رسمية</h1>
                <p style="font-size: 1.5rem; margin-top: 15px;">تتشرف منصة كسال ميديا بمنح هذه الشهادة للمبدع:</p>
                <h2 id="cert-user-name" style="font-family: 'Aref Ruqaa'; color: #c5a059; font-size: 3rem; margin: 15px 0;"></h2>
                <p style="font-size: 1.3rem;">نظير نجاحه في اختبار الكفاءة الإعلامية بصفة:</p>
                <h3 id="cert-user-role" style="font-size: 1.8rem; color: #0a192f;"></h3>
                <div style="margin-top: 40px; display: flex; justify-content: space-around; font-weight: bold;">
                    <div><p>المشرف العام</p><p style="color: #c5a059;">الأستاذ مسعدي فؤاد</p></div>
                    <div><p>المسؤول التقني</p><p style="color: #c5a059;">خالد</p></div>
                </div>
            </div>
        </div>
        <button onclick="downloadCert()" style="margin-top: 25px; padding: 15px 40px; background: #10b981; color: white; border: none; border-radius: 50px; cursor: pointer; font-weight: bold;">تحميل الشهادة PNG</button>
    </div>
</section>`;

document.write(quizAndCertHTML);

let qIdx = 0; let score = 0;

function beginQuiz() {
    if(!document.getElementById('inName').value) return alert("يا بن العم، عمر اسمك في الاستمارة الفوق أولاً!");
    document.getElementById('start-quiz-btn').style.display = 'none';
    renderQuestion();
}

function renderQuestion() {
    if(qIdx >= kselQuestions.length) return finishQuiz();
    const q = kselQuestions[qIdx];
    document.getElementById('q-text').innerText = (qIdx+1) + ". " + q.q;
    const area = document.getElementById('options-area');
    area.innerHTML = '';
    q.o.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.style = "padding: 12px; border: 1px solid #ddd; border-radius: 8px; background: #f8fafc; cursor: pointer; font-family: 'Cairo'; text-align: right;";
        btn.onclick = () => { if(i === q.a) score++; qIdx++; renderQuestion(); };
        area.appendChild(btn);
    });
}

function finishQuiz() {
    document.getElementById('quiz-container').style.display = 'none';
    if(score >= 14) { // النجاح من 14/20
        document.getElementById('cert-area').style.display = 'block';
        document.getElementById('cert-user-name').innerText = document.getElementById('inName').value;
        document.getElementById('cert-user-role').innerText = document.getElementById('inRole').value;
    } else {
        alert("نتيجتك هي " + score + " من 20. لازم تجيب 14 باش تخرجلك الشهادة. عاود جرب!");
        location.reload();
    }
}

function downloadCert() {
    html2canvas(document.querySelector("#final-cert"), { scale: 2 }).then(canvas => {
        let l = document.createElement('a');
        l.download = 'Kessal_Media_Certificate.png';
        l.href = canvas.toDataURL();
        l.click();
    });
}
