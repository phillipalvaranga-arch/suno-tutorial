// Scenes: els = [left%, topPx, width%, label]; hl = index of element tapped; tracks = [[label,color]]
const L=[
{t:"Getting started",s:[
{h:"Open Suno",p:"On your phone, tablet, or PC, open a web browser and go to <b>suno.com</b>. You can also install the Suno app from the Google Play Store.",sc:{els:[[5,20,90,"🔍 suno.com"],[25,120,50,"Sign up / Sign in"]],hl:1}},
{h:"Sign in",p:"Tap <b>Sign in</b> and use Google, Apple, Microsoft, or another listed option. A free account works for making songs.",sc:{els:[[20,40,60,"Continue with Google"],[20,100,60,"Other sign-in options"]],hl:0}},
{h:"Know your plan",p:"<b>Free:</b> make songs, MP3 downloads, not for commercial use.<br><b>Pro:</b> WAV downloads, Get Stems, commercial rights, advanced editing.<br><b>Premier:</b> everything in Pro plus <b>Suno Studio</b> and Advanced Split stems.",sc:{els:[[4,60,28,"Free"],[36,60,28,"Pro"],[68,60,28,"Premier ★"]],hl:2}},
{h:"Find Create",p:"Tap <b>Create</b> in the menu. That's where every new song starts. Your finished songs live in your <b>Library</b>.",sc:{els:[[5,30,40,"🏠 Home"],[5,90,40,"➕ Create"],[5,150,40,"📚 Library"]],hl:1}}]},
{t:"Making your first song",s:[
{h:"Choose Simple",p:"On the Create page, pick <b>Simple</b>. You just describe the song and Suno writes the lyrics and music.",sc:{els:[[10,30,38,"Simple"],[52,30,38,"Custom"]],hl:0}},
{h:"Describe your song",p:"Type a description, like <i>\"an uplifting reggae gospel song about God's faithfulness.\"</i> Stuck? Tap the dice for a random idea.",sc:{els:[[5,30,90,"uplifting reggae gospel song about God's faithfulness"],[78,110,17,"🎲"]],hl:0}},
{h:"Instrumental or vocals",p:"Leave <b>Instrumental</b> off to get singing. Turn it on for music with no vocals.",sc:{els:[[5,40,60,"Instrumental"],[70,40,25,"OFF ◯"]],hl:1}},
{h:"Pick the model",p:"Use the model menu to pick the newest version (v5.5 at the time of writing; a newer one may show up first). Newer models sound fuller.",sc:{els:[[5,40,45,"Model ▾"],[5,95,45,"Newest (top)"]],hl:1}},
{h:"Tap Create",p:"Tap <b>Create</b>. Suno usually makes <b>two versions</b>. Tap ▶ to hear each one and keep your favorite.",sc:{els:[[25,30,50,"✨ Create"],[5,120,90,"▶ Version 1"],[5,175,90,"▶ Version 2"]],hl:0}}]},
{t:"Making beats",s:[
{h:"Turn on Instrumental",p:"A beat has no vocals. On Create, choose <b>Custom</b> and switch <b>Instrumental ON</b>. The lyrics box goes away.",sc:{els:[[52,20,38,"Custom"],[5,100,60,"Instrumental"],[70,100,25,"ON ●"]],hl:2}},
{h:"Write a beat style prompt",p:"In <b>Style of Music</b>, name the genre, drums, bass, and mood. Examples:<br>• <i>trap beat, hard 808s, rolling hi-hats, dark piano, 140 BPM</i><br>• <i>boom bap hip-hop, dusty drums, jazzy sample chops, 90 BPM</i><br>• <i>roots reggae riddim, one drop drums, deep bass, skank guitar, 75 BPM</i><br>• <i>dancehall riddim, digital drums, heavy bass, 100 BPM</i><br>• <i>afrobeats, log drum, shakers, warm synth, 108 BPM</i>",sc:{els:[[5,30,90,"trap beat, hard 808s, rolling hi-hats, 140 BPM"]],hl:0}},
{h:"Add BPM and key",p:"Put tempo and key in the style text, such as <i>\"140 BPM, C minor\"</i>. Suno usually follows them closely but not always, so listen and regenerate if needed.",sc:{els:[[5,40,42,"140 BPM"],[53,40,42,"C minor"]],hl:0}},
{h:"Make it loop-friendly",p:"For a loop, add words like <i>\"steady loop, no intro, no vocals, consistent groove\"</i>. Then in the editor, crop out a clean 4 or 8 bar section.",sc:{tracks:[["Beat",'#7a5cff']],els:[[30,170,40,"✂ Crop 8 bars"]],hl:0}},
{h:"Extend the beat",p:"Want it longer? Open the song's <b>⋯ (More Actions)</b> → <b>Remix/Edit</b> → <b>Extend</b>. Pick where to continue, keep Instrumental on, then use <b>Get Whole Song</b>.",sc:{els:[[60,20,35,"⋯"],[40,80,55,"Remix/Edit ›"],[40,135,55,"Extend"]],hl:2}},
{h:"Build it in Studio (Premier)",p:"Open the beat in <b>Suno Studio</b>. Split it into stems, then add new tracks. Ask Studio to generate a part, such as <i>\"heavier 808 bass\"</i> or <i>\"extra percussion\"</i>.",sc:{tracks:[["Drums",'#ff5c7a'],["Bass",'#3fd2ff'],["Keys",'#6dff9b']],els:[[5,230,45,"＋ Add track"]],hl:0}},
{h:"Mix and export",p:"Adjust each track's volume, mute what you don't want, and use <b>Export → Multitrack</b> to download each part as a WAV stem for a DAW. On Pro, use <b>Get Stems</b> from the Library instead.",sc:{els:[[60,20,35,"Export ▾"],[55,80,40,"Multitrack"]],hl:1}}]},
{t:"Custom mode & lyrics",s:[
{h:"Switch to Custom",p:"Tap <b>Custom</b> for full control: your own lyrics, your own style, and a title.",sc:{els:[[10,30,38,"Simple"],[52,30,38,"Custom"]],hl:1}},
{h:"Write or paste lyrics",p:"Paste lyrics into the Lyrics box. Mark parts with tags like <b>[Verse]</b>, <b>[Chorus]</b>, <b>[Bridge]</b>, <b>[Outro]</b> to shape the song.",sc:{els:[[5,20,90,"[Verse] Morning light..."],[5,75,90,"[Chorus] You are faithful..."]],hl:0}},
{h:"Set the style",p:"In <b>Style of Music</b>, describe genre, instruments, voice, and mood, like <i>\"soulful gospel, female vocals, Hammond organ, choir.\"</i> The magic wand can suggest a style from your taste.",sc:{els:[[5,40,75,"soulful gospel, female vocals"],[82,40,13,"🪄"]],hl:0}},
{h:"Title and Create",p:"Add a title and tap <b>Create</b>.",sc:{els:[[5,30,90,"Title: Faithful"],[25,110,50,"✨ Create"]],hl:1}},
{h:"Extend, Cover, Remaster, Voices",p:"From a song's <b>⋯</b> menu:<br>• <b>Extend</b>: make it longer.<br>• <b>Cover</b>: same song in a new style.<br>• <b>Remaster</b>: a cleaner, fuller mix.<br>• <b>Voices</b> (Pro/Premier, replaced Personas): keep a consistent voice across songs, or use your own singing.",sc:{els:[[60,15,35,"⋯"],[40,70,55,"Extend"],[40,120,55,"Cover"],[40,170,55,"Remaster"]],hl:2}}]},
{t:"Suno Studio basics",s:[
{h:"What Studio is",p:"Suno Studio is a multitrack editor in your browser, like a recording studio. <b>It needs the Premier plan.</b> It works best on your Windows PC with a mouse.",sc:{tracks:[["Track 1",'#7a5cff'],["Track 2",'#ff5c7a']],els:[],hl:-1}},
{h:"Open Studio",p:"Find <b>Studio</b> in Suno's main menu. Use <b>Open Library</b> on the bar under the timeline to bring in a song you already made.",sc:{els:[[5,30,40,"🎛 Studio"],[30,200,40,"Open Library"]],hl:1}},
{h:"Put the song on the timeline",p:"Pick a song. The <b>Details</b> panel opens on the right. Tap the arrows next to stems to add them, or <b>Insert All</b>.",sc:{els:[[55,20,40,"Details"],[55,80,40,"Stems"],[55,140,40,"Insert All"]],hl:2}},
{h:"Play and move around",p:"Press the <b>spacebar</b> or the ▶ Play button to play and pause. Drag clips to move them, and drag their edges to trim.",sc:{tracks:[["Vocals",'#ff5c7a'],["Music",'#3fd2ff']],els:[[40,230,20,"▶"]],hl:0}},
{h:"Edit and regenerate",p:"Select a section and use the editing options to replace or regenerate it. You can also add a new track and describe what to generate, like <i>\"bass line\"</i>. Exact button names can change, so follow the labels on your screen.",sc:{els:[[5,40,90,"Selected section"],[25,120,50,"Replace / Regenerate"]],hl:1}}]},
{t:"Stems & soundtracks from a finished song",s:[
{h:"What stems are",p:"Stems are the separate parts of a song: <b>vocals, drums, bass, guitar, keys</b>, and more. With them you can make an instrumental, a karaoke version, or a new soundtrack.",sc:{tracks:[["Vocals",'#ff5c7a'],["Drums",'#ffd23f'],["Bass",'#3fd2ff'],["Keys",'#6dff9b']],els:[],hl:-1}},
{h:"Get Stems from the Library (Pro or Premier)",p:"In your <b>Library</b>, tap <b>⋯ (More Actions)</b> next to the song → <b>Get Stems</b>.",sc:{els:[[5,30,60,"♪ My Song"],[70,30,25,"⋯"],[40,100,55,"Get Stems"]],hl:2}},
{h:"Choose a split type",p:"• <b>Auto Split</b>: up to 12 stems, 50 credits (Pro/Premier).<br>• <b>Split from Mix</b>: pull out one part, like the vocals, plus everything else, 10 credits per stem (Pro/Premier).<br>• <b>Advanced Split</b>: choose from about 100 instruments, 10 credits per stem (<b>Premier only</b>).<br>Then tap <b>Extract</b>.",sc:{els:[[5,20,90,"Auto Split"],[5,75,90,"Split from Mix"],[5,130,90,"Advanced Split"],[30,200,40,"Extract"]],hl:3}},
{h:"Make an instrumental version",p:"Use <b>Split from Mix</b> with <b>Vocals</b>. The \"complement\" track it gives you is the music without the singing, so it works as an instrumental or karaoke track.",sc:{tracks:[["Vocals (muted)",'#555'],["Instrumental",'#3fd2ff']],els:[],hl:-1}},
{h:"Split inside Studio (Premier)",p:"In Studio, <b>right-click</b> the song's clip on the timeline (long-press on a tablet) → <b>Split Stems</b> → choose a split type → <b>Extract</b>.",sc:{tracks:[["My Song",'#7a5cff']],els:[[40,140,50,"Split Stems"]],hl:0}},
{h:"Add new instruments",p:"Add a new track and have Studio generate a part that fits your song, such as strings, percussion, or a bass line. Mute the original stems you don't want. That's how you build a new soundtrack from a finished song.",sc:{tracks:[["Drums",'#ffd23f'],["Bass",'#3fd2ff'],["＋ New: Strings",'#6dff9b']],els:[[5,230,45,"＋ Add track"]],hl:0}},
{h:"Turn it into MIDI",p:"In Studio, select a stem and choose <b>Get MIDI</b> (10 credits) to get a MIDI file for other music software.",sc:{els:[[5,40,60,"Bass stem"],[20,110,50,"Get MIDI"]],hl:1}}]},
{t:"Exporting",s:[
{h:"Download a song",p:"Tap <b>⋯</b> next to a song → <b>Download</b>. <b>MP3</b> works on every plan. <b>WAV</b> (higher quality) needs Pro or Premier and is available on suno.com. The phone app downloads MP3.",sc:{els:[[70,20,25,"⋯"],[40,80,55,"Download ›"],[40,135,25,"MP3"],[70,135,25,"WAV"]],hl:3}},
{h:"Export from Studio",p:"Use the <b>Export</b> button at the top right above the timeline:<br>• <b>Full Song</b>: the whole mix.<br>• <b>Selected Time Range</b>: only the highlighted part.<br>• <b>Multitrack</b>: each track as a separate stem file.<br>Studio exports are WAV.",sc:{els:[[60,15,35,"Export ▾"],[45,70,50,"Full Song"],[45,120,50,"Selected Range"],[45,170,50,"Multitrack"]],hl:3}},
{h:"Download one clip",p:"In Studio, right-click a clip → <b>Download .WAV</b>.",sc:{tracks:[["Clip",'#ff5c7a']],els:[[40,140,50,"Download .WAV"]],hl:0}},
{h:"Download limits",p:"Free includes 7 trial downloads total. Pro includes 20 a month and Premier 60 a month, and Premier downloads from Studio are unlimited. Only songs made on Pro or Premier can be used commercially.",sc:{els:[[4,60,28,"Free 7"],[36,60,28,"Pro 20/mo"],[68,60,28,"Premier 60/mo"]],hl:-1}}]},
{t:"Tips",s:[
{h:"Be specific",p:"Name the genre, instruments, tempo, voice type, and mood. Short and clear beats long and vague.",sc:{els:[[5,40,90,"reggae, 75 BPM, male vocals, joyful"]],hl:0}},
{h:"Generate a few times",p:"Every try comes out different. Make a few and keep the best.",sc:{els:[[5,30,90,"▶ Try 1"],[5,85,90,"▶ Try 2"],[5,140,90,"▶ Try 3 ★"]],hl:2}},
{h:"Watch your credits",p:"Each song, extend, and stem split uses credits. Check your balance before big stem jobs.",sc:{els:[[25,60,50,"Credits: 2,500"]],hl:0}},
{h:"Use the PC for Studio",p:"Studio works best on a big screen with a mouse. Make songs on your phone, then edit them on the PC.",sc:{els:[[5,60,40,"📱 Create"],[55,60,40,"🖥 Studio"]],hl:1}}]}
];
const A=document.getElementById('app');
let au=null,key=null,auto=localStorage.getItem('auto')==='1',rate=+(localStorage.getItem('rate')||1);
function stopA(){if(au){au.pause();au=null}if(window.speechSynthesis)speechSynthesis.cancel();mark(false)}
function mark(on){const t=document.getElementById('rt');if(t)t.classList.toggle('reading',on);const b=document.getElementById('pp');if(b)b.textContent=on?'⏸ Pause':'🔊 Play narration'}
function speakFallback(){if(!window.speechSynthesis)return mark(false);const u=new SpeechSynthesisUtterance(NARR[key]||'');u.rate=rate;u.lang='en-US';u.onend=()=>mark(false);speechSynthesis.speak(u);mark(true)}
function playA(){stopA();au=new Audio('audio/'+key+'.mp3');au.playbackRate=rate;au.onended=()=>mark(false);au.onerror=()=>{au=null;speakFallback()};
 au.play().then(()=>mark(true)).catch(e=>{if(e&&e.name==='NotAllowedError'){mark(false)}else{au=null;speakFallback()}})}
function toggleA(){const playing=(au&&!au.paused)||(window.speechSynthesis&&speechSynthesis.speaking);if(playing)stopA();else playA()}
function player(k){key=k;return `<div class="aud"><button class="pp" id="pp">🔊 Play narration</button><label><input type="checkbox" id="ar" ${auto?'checked':''}>Auto-read</label><label>Speed <select id="sp">${[.75,1,1.25].map(r=>`<option value="${r}" ${r===rate?'selected':''}>${r}x</option>`).join('')}</select></label></div>`}
function wire(){document.getElementById('pp').onclick=toggleA;document.getElementById('ar').onchange=e=>{auto=e.target.checked;localStorage.setItem('auto',auto?'1':'0')};
 document.getElementById('sp').onchange=e=>{rate=+e.target.value;localStorage.setItem('rate',rate);if(au)au.playbackRate=rate};if(auto)playA()}let cur=0,st=0;
function scene(sc){let h='<div class="stage" aria-label="Illustration"><span class="lbl">Illustration, not Suno\'s real screen</span>';
 (sc.tracks||[]).forEach((t,i)=>{h+=`<div class="track fadein" style="top:${20+i*44}px;background:${t[1]};animation-delay:${i*.2}s"><i></i><b style="position:relative;padding:6px;font-size:.7em;color:#000">${t[0]}</b></div>`});
 if(sc.tracks)h+='<div class="play"></div>';
 sc.els.forEach((e,i)=>{h+=`<div class="ui fadein${i===sc.hl?' hl':''}" style="left:${e[0]}%;top:${e[1]}px;width:${e[2]}%;animation-delay:${.15*i}s">${e[3]}</div>`});
 if(sc.hl>=0)h+='<div class="cursor" id="cur" style="left:85%;top:250px"></div>';
 return h+'</div>'}
function moveCur(sc){const c=document.getElementById('cur');if(!c)return;const e=sc.els[sc.hl];
 requestAnimationFrame(()=>requestAnimationFrame(()=>{c.style.left=`calc(${e[0]+e[2]/2}% - 17px)`;c.style.top=(e[1]+4)+'px';c.classList.add('tap')}))}
function menu(){stopA();A.innerHTML='<h2>Lessons</h2><p class="note">Tap a lesson. Each one has animated, step-by-step pictures. Updated Nov 2026; Suno changes its screens often, so a button may look a little different on yours.</p><div class="menu">'+L.map((l,i)=>`<button data-i="${i}"><span>${i+1}.</span>${l.t}</button>`).join('')+'<button data-i="c"><span>★</span>Quick cheat sheet</button></div>';
 A.querySelectorAll('.menu button').forEach(b=>b.onclick=()=>b.dataset.i==='c'?cheat():open(+b.dataset.i,0));scrollTo(0,0)}
function open(i,s){stopA();cur=i;st=s;const l=L[i],x=l.s[s];
 A.innerHTML=`<h2>${i+1}. ${l.t}</h2><div class="prog"><div style="width:${(s+1)/l.s.length*100}%"></div></div><div class="step fadein"><p class="note">Step ${s+1} of ${l.s.length}</p><h3>${x.h}</h3>${player(`a${i}_${s}`)}${scene(x.sc)}<p id="rt">${x.p}</p></div>
 <div class="nav"><button class="sec" id="bk">◀ Back</button><button class="pri" id="nx">${s<l.s.length-1?'Next ▶':(i<L.length-1?'Next lesson ▶':'Finish ✓')}</button></div>`;
 moveCur(x.sc);wire();
 document.getElementById('bk').onclick=()=>s>0?open(i,s-1):(i>0?open(i-1,L[i-1].s.length-1):menu());
 document.getElementById('nx').onclick=()=>s<l.s.length-1?open(i,s+1):(i<L.length-1?open(i+1,0):menu());scrollTo(0,0)}
function cheat(){stopA();A.innerHTML=`<h2>Quick cheat sheet</h2>${player('cheat')}<table id="rt">
<tr><th>I want to…</th><th>Do this</th><th>Plan</th></tr>
<tr><td>Make a quick song</td><td>Create → Simple → describe → Create</td><td>Free+</td></tr>
<tr><td>Use my lyrics</td><td>Create → Custom → Lyrics + Style → Create</td><td>Free+</td></tr>
<tr><td>Make a beat</td><td>Custom → Instrumental ON → style with genre + BPM + key</td><td>Free+</td></tr>
<tr><td>Make it longer</td><td>⋯ → Remix/Edit → Extend → Get Whole Song</td><td>Free+</td></tr>
<tr><td>New style, same song</td><td>⋯ → Cover</td><td>Free+</td></tr>
<tr><td>Cleaner sound</td><td>⋯ → Remaster</td><td>Check your plan</td></tr>
<tr><td>Split into stems</td><td>Library ⋯ → Get Stems → split type → Extract</td><td>Pro / Premier</td></tr>
<tr><td>Instrumental of a song</td><td>Get Stems → Split from Mix → Vocals; use the complement</td><td>Pro / Premier</td></tr>
<tr><td>Pick from ~100 instruments</td><td>Get Stems → Advanced Split</td><td>Premier</td></tr>
<tr><td>Edit multitrack / add parts</td><td>Suno Studio → Open Library → Insert All → add track</td><td>Premier</td></tr>
<tr><td>Stems from Studio</td><td>Right-click clip → Split Stems → Extract</td><td>Premier</td></tr>
<tr><td>Export everything</td><td>Studio → Export → Full Song / Selected Range / Multitrack (WAV)</td><td>Premier</td></tr>
<tr><td>MP3 / WAV download</td><td>⋯ → Download. MP3 on every plan, WAV on Pro/Premier</td><td>Free / Pro+</td></tr>
<tr><td>MIDI</td><td>Studio → select stem → Get MIDI</td><td>Premier</td></tr></table>
<p class="note">Credit costs: Auto Split 50, Split from Mix 10 per stem, Advanced Split 10 per stem, Get MIDI 10. Source: help.suno.com (Sept 2026).</p>`;wire();scrollTo(0,0)}
document.getElementById('homeBtn').onclick=menu;document.getElementById('cheatBtn').onclick=cheat;menu();
if('serviceWorker'in navigator)navigator.serviceWorker.register('sw.js').catch(()=>{});
