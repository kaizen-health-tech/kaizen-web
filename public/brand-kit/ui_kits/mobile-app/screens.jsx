function boot(){
const { Icon, Button, IconButton, Card, ListItem, Avatar, Badge, Tag, Chip, SearchBar,
  Input, SegmentedControl, ProgressBar, Banner, Toast, TabBar, TopBar, ChatBubble, MemoryChip,
  Switch } = window.KaizenHealthDesignSystem_869e5e;

const FRAME_CSS = `.kzframe .phone{width:390px;background:#000;border-radius:52px;padding:11px;box-shadow:0 40px 90px rgba(0,0,0,.5)}.kzframe .screen{position:relative;width:368px;height:720px;background:var(--color-background);border-radius:42px;overflow:hidden;display:flex;flex-direction:column}.kzframe .statusbar{height:44px;display:flex;align-items:center;justify-content:space-between;padding:0 26px;flex-shrink:0}.kzframe .statusbar .time{font-weight:700;font-size:14px;color:var(--color-on-background)}.kzframe .statusbar .icons{display:flex;gap:6px;align-items:center;color:var(--color-on-background)}.kzframe .body{flex:1;overflow-y:auto;overflow-x:hidden}.kzframe .body::-webkit-scrollbar{display:none}.kzframe .pad{padding:0 20px}.kzframe .stack{display:flex;flex-direction:column}`;

const StatusBar = () => (
  <div className="statusbar">
    <span className="time">9:41</span>
    <span className="icons">
      <Icon name="Global" size={15} /><Icon name="Chart" size={15} /><Icon name="Fire" size={15} />
    </span>
  </div>
);

/* ---------- Health score ring ---------- */
function ScoreRing({ score = 82, size = 132, stroke = 12 }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - score / 100);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--color-surface-variant)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--aquamarine)" strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="47%" textAnchor="middle" dominantBaseline="middle" fontFamily="var(--font-sans)" fontWeight="800" fontSize={size*0.28} fill="var(--color-on-background)">{score}</text>
      <text x="50%" y="66%" textAnchor="middle" fontFamily="var(--font-sans)" fontWeight="600" fontSize="11" letterSpacing="1" fill="var(--color-text-muted)">SCORE</text>
    </svg>
  );
}

const MEMBERS = [
  { name: "Maya Chen", score: 82, me: true },
  { name: "Dad", score: 74 },
  { name: "Mom", score: 88 },
  { name: "Leo", score: 91 },
];

/* ---------- HOME ---------- */
function Home({ go }) {
  return (
    <div className="body">
      <div className="pad" style={{ paddingTop: 4 }}>
        <div className="kz-headline-sm" style={{ color: "var(--color-text-muted)" }}>March 12, 2025</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 2 }}>
          <div className="kz-headline-md" style={{ color: "var(--color-on-background)" }}>Hi, Maya</div>
          <div style={{ display: "flex", gap: 6 }}>
            <IconButton name="Bell" color="var(--color-on-background)" />
            <IconButton name="Settings" color="var(--color-on-background)" />
          </div>
        </div>

        <button onClick={() => go("health")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", padding: "14px 0 4px", cursor: "pointer" }}>
          <Icon name="AiSparkleRounded" size={20} color="var(--violet)" />
          <span className="kz-title-sm" style={{ color: "var(--color-on-background)" }}>Kai's insight for today</span>
          <Icon name="ChevronRight" size={20} color="var(--color-on-background)" />
        </button>
      </div>

      {/* member bubbles */}
      <div style={{ display: "flex", gap: 16, overflowX: "auto", padding: "12px 20px 20px" }}>
        {MEMBERS.map((m) => (
          <button key={m.name} onClick={() => go("health")} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>
            <div style={{ position: "relative" }}>
              <Avatar name={m.name} size={62} ring={m.me} />
              <span style={{ position: "absolute", bottom: -4, right: -4, background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 999, padding: "1px 6px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 11, color: "var(--color-primary)" }}>{m.score}</span>
            </div>
            <span className="kz-label-sm" style={{ color: "var(--color-on-background)", letterSpacing: 0 }}>{m.name.split(" ")[0]}</span>
          </button>
        ))}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <div style={{ width: 62, height: 62, borderRadius: 999, border: "2px dashed var(--color-outline-variant)", display: "grid", placeItems: "center" }}>
            <Icon name="Plus" size={24} color="var(--color-text-muted)" />
          </div>
          <span className="kz-label-sm" style={{ color: "var(--color-text-muted)", letterSpacing: 0 }}>Add</span>
        </div>
      </div>

      <div className="pad stack" style={{ gap: 16, paddingBottom: 24 }}>
        <Card style={{ background: "linear-gradient(150deg,#6E40F3,#5338A0 62%,#201839)", border: "none", color: "#fff" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <ScoreRing score={82} />
            <div style={{ flex: 1 }}>
              <div className="kz-title-md" style={{ color: "#fff" }}>Your health looks steady</div>
              <div className="kz-body-sm" style={{ color: "rgba(255,255,255,.8)", marginTop: 4 }}>Up 3 points this week. Sleep is your biggest gain.</div>
              <div style={{ marginTop: 12 }}><Button size="sm" mode="contained" onClick={() => go("health")} style={{ background: "var(--aquamarine)", color: "var(--dark-plum)", boxShadow: "none" }}>See breakdown</Button></div>
            </div>
          </div>
        </Card>

        <Banner tone="ai" title="2 documents ready to review" message="Kai tagged your latest labs and found a trend." action="Review" onAction={() => go("documents")} />

        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
            <span className="kz-title-md" style={{ color: "var(--color-on-background)" }}>Upcoming</span>
            <a className="kz-label-md" onClick={() => go("documents")} style={{ cursor: "pointer" }}>See all</a>
          </div>
          <Card style={{ padding: 8 }}>
            <ListItem icon="Calendar" iconTone={{ bg: "var(--light-lilac)", fg: "var(--violet)" }} title="Dr. Alvarez — Cardiology" subtitle="Tomorrow · 10:30 AM" trailing={<Badge tone="violet">Soon</Badge>} onClick={() => {}} />
            <ListItem icon="Pill" iconTone={{ bg: "var(--cyan-100)", fg: "var(--cyan-400)" }} title="Refill Lisinopril" subtitle="3 days left" onClick={() => {}} />
          </Card>
        </div>

        <div>
          <div className="kz-title-md" style={{ color: "var(--color-on-background)", marginBottom: 6 }}>From your feed</div>
          <Card>
            <Tag label="Heart health" color="var(--sea-green)" style={{ marginBottom: 10 }} />
            <div className="kz-title-sm" style={{ color: "var(--color-text)" }}>Small daily walks lower blood pressure</div>
            <div className="kz-body-sm" style={{ color: "var(--color-text-muted)", marginTop: 4 }}>A new review of 27 studies suggests 20 minutes a day makes a measurable difference.</div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------- KAI CHAT ---------- */
function Kai() {
  const [msgs, setMsgs] = React.useState([
    { role: "assistant", text: "Hi Maya — I pulled your March lab results. Ask me anything about them." },
    { role: "user", text: "What changed since January?" },
    { role: "assistant", text: "Your LDL cholesterol dropped 14 points to 118 mg/dL — that's back in the healthy range. Vitamin D is still slightly low." },
  ]);
  const [val, setVal] = React.useState("");
  const send = () => {
    if (!val.trim()) return;
    setMsgs((m) => [...m, { role: "user", text: val }, { role: "assistant", text: "Good question — give me a moment to check your records…" }]);
    setVal("");
  };
  return (
    <div className="body" style={{ display: "flex", flexDirection: "column" }}>
      <div className="pad" style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: 999, background: "var(--light-lilac)", display: "grid", placeItems: "center" }}>
          <Icon name="Kai" size={26} color="var(--violet)" />
        </div>
        <div style={{ flex: 1 }}>
          <div className="kz-title-md" style={{ color: "var(--color-on-background)" }}>Kai</div>
          <div className="kz-label-sm" style={{ color: "var(--success)", letterSpacing: 0 }}>● Online · Claude</div>
        </div>
        <IconButton name="DotsVertical" color="var(--color-on-background)" />
      </div>

      <div className="pad stack" style={{ gap: 14, flex: 1, paddingBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
          <MemoryChip label="Allergic to penicillin" />
          <MemoryChip label="Family history: diabetes" />
        </div>
        {msgs.map((m, i) => <ChatBubble key={i} role={m.role}>{m.text}</ChatBubble>)}
      </div>

      <div style={{ padding: "10px 16px", borderTop: "1px solid var(--color-border)", display: "flex", alignItems: "center", gap: 8, background: "var(--color-surface)" }}>
        <IconButton name="AiAttachment" color="var(--color-text-muted)" />
        <input value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Ask Kai…"
          style={{ flex: 1, border: "none", outline: "none", background: "var(--color-surface-input)", borderRadius: 999, padding: "11px 16px", font: "inherit", fontSize: 15, color: "var(--color-on-surface)" }} />
        <button onClick={send} style={{ width: 42, height: 42, borderRadius: 999, background: "var(--color-primary)", border: "none", display: "grid", placeItems: "center", cursor: "pointer", flexShrink: 0 }}>
          <Icon name="Publish" size={20} color="var(--color-on-primary)" />
        </button>
      </div>
    </div>
  );
}

/* ---------- RECORDS ---------- */
const DOCS = [
  { icon: "FileText", tone: { bg: "var(--cyan-100)", fg: "var(--cyan-400)" }, title: "Lipid panel — LabCorp", sub: "Mar 10 · PDF", tag: "Lab result", tone2: "info" },
  { icon: "Pill", tone: { bg: "var(--candy-pink-100)", fg: "var(--candy-pink-400)" }, title: "Lisinopril 10mg", sub: "Active · morning", tag: "Medication" },
  { icon: "Bill", tone: { bg: "var(--yellow-100)", fg: "var(--yellow-400)" }, title: "Visit summary — Cardiology", sub: "Feb 28 · Note" },
  { icon: "Calendar", tone: { bg: "var(--light-lilac)", fg: "var(--violet)" }, title: "Annual physical", sub: "Apr 2 · Event" },
  { icon: "FileText", tone: { bg: "var(--cyan-100)", fg: "var(--cyan-400)" }, title: "MRI report — knee", sub: "Jan 18 · PDF" },
];
function Records() {
  const [seg, setSeg] = React.useState("Mine");
  const [cat, setCat] = React.useState("All");
  return (
    <div className="body pad" style={{ paddingTop: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span className="kz-headline-md" style={{ color: "var(--color-on-background)" }}>Records</span>
        <IconButton name="SortDescending" color="var(--color-on-background)" />
      </div>
      <SearchBar placeholder="Search records" />
      <div style={{ margin: "14px 0" }}><SegmentedControl options={["Mine", "Shared with me"]} value={seg} onChange={setSeg} /></div>
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 14 }}>
        {["All", "Labs", "Meds", "Notes", "Events"].map((c) => (
          <Chip key={c} label={c} onClick={() => setCat(c)}
            tone={cat === c ? { bg: "var(--color-primary)", fg: "var(--color-on-primary)" } : { bg: "var(--color-surface-variant)", fg: "var(--color-text-muted)" }} />
        ))}
      </div>
      <Card style={{ padding: 8 }}>
        {DOCS.map((d, i) => (
          <ListItem key={i} icon={d.icon} iconTone={d.tone} title={d.title} subtitle={d.sub}
            trailing={d.tag ? <Badge tone={d.tone2 || "neutral"}>{d.tag}</Badge> : <Icon name="ChevronRight" size={20} color="var(--color-outline)" />} onClick={() => {}} />
        ))}
      </Card>
    </div>
  );
}

/* ---------- HEALTH PROFILE ---------- */
const CONTRIB = [
  { icon: "Walk", label: "Activity", val: "8,240 steps", pct: 78, tone: "var(--aquamarine)" },
  { icon: "Sleep", label: "Sleep", val: "7h 20m", pct: 88, tone: "var(--heather-300)" },
  { icon: "Heart", label: "Resting HR", val: "62 bpm", pct: 70, tone: "var(--candy-pink-300)" },
  { icon: "Fire", label: "Active energy", val: "540 kcal", pct: 64, tone: "var(--orange-300)" },
];
function Health({ go }) {
  const [seg, setSeg] = React.useState("Overall");
  return (
    <div className="body">
      <TopBar title="Health profile" onBack={() => go("home")} align="left" actions={<IconButton name="Share_3" color="var(--color-on-background)" />} />
      <div className="pad stack" style={{ gap: 16, paddingBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0" }}><ScoreRing score={82} size={168} stroke={14} /></div>
        <SegmentedControl options={["Overall", "Activity", "Shared"]} value={seg} onChange={setSeg} />
        <Banner tone="ai" message="Sleep consistency drove most of this week's gain. Keep a steady bedtime." />
        <div className="kz-title-md" style={{ color: "var(--color-on-background)" }}>Contributors</div>
        <div className="stack" style={{ gap: 10 }}>
          {CONTRIB.map((c) => (
            <Card key={c.label} style={{ padding: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "var(--color-surface-variant)", display: "grid", placeItems: "center" }}>
                  <Icon name={c.icon} size={22} color={c.tone} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span className="kz-title-sm" style={{ color: "var(--color-text)" }}>{c.label}</span>
                    <span className="kz-label-md" style={{ color: "var(--color-text-muted)" }}>{c.val}</span>
                  </div>
                  <div style={{ marginTop: 8 }}><ProgressBar value={c.pct} mode="brand" /></div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- GROUPS ---------- */
function Groups() {
  return (
    <div className="body pad" style={{ paddingTop: 4 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <span className="kz-headline-md" style={{ color: "var(--color-on-background)" }}>Groups</span>
        <IconButton name="Invite" color="var(--color-on-background)" />
      </div>
      <Card style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex" }}>
            {["Maya Chen", "Dad", "Mom", "Leo"].map((n, i) => <div key={n} style={{ marginLeft: i ? -12 : 0 }}><Avatar name={n} size={40} /></div>)}
          </div>
          <div style={{ flex: 1 }}>
            <div className="kz-title-sm" style={{ color: "var(--color-text)" }}>Chen Family</div>
            <div className="kz-body-sm" style={{ color: "var(--color-text-muted)" }}>4 members · 2 shared records</div>
          </div>
          <Icon name="ChevronRight" size={20} color="var(--color-outline)" />
        </div>
      </Card>
      <div className="kz-title-md" style={{ color: "var(--color-on-background)", marginBottom: 6 }}>Members</div>
      <Card style={{ padding: 8 }}>
        <ListItem icon="User" title="Dad — Robert Chen" subtitle="Shares: medications, labs" trailing={<Tag label="Father" color="var(--heather-300)" />} onClick={() => {}} />
        <ListItem icon="User" title="Mom — Grace Chen" subtitle="Shares: everything" trailing={<Tag label="Mother" color="var(--candy-pink-300)" />} onClick={() => {}} />
        <ListItem icon="User" title="Leo Chen" subtitle="Shares: immunizations" trailing={<Tag label="Son" color="var(--sea-green)" />} onClick={() => {}} />
      </Card>
    </div>
  );
}

/* ---------- SHELL ---------- */
function App() {
  const [tab, setTab] = React.useState("home");
  const [toast, setToast] = React.useState(false);
  React.useEffect(() => { if (toast) { const t = setTimeout(() => setToast(false), 2200); return () => clearTimeout(t); } }, [toast]);
  const go = (t) => setTab(t);
  const screens = { home: <Home go={go} />, groups: <Groups />, chat: <Kai />, documents: <Records />, health: <Health go={go} /> };
  const tabValue = tab === "health" ? "home" : tab;
  return (
    <div className="kzframe">
      <style>{FRAME_CSS}</style>
      <div className="phone">
      <div className="screen">
        <StatusBar />
        {screens[tab]}
        {toast && <div style={{ position: "absolute", left: 20, right: 20, bottom: 92 }}><Toast type="success" message="Ready to add a document" /></div>}
        <TabBar value={tabValue} onChange={setTab} onAdd={() => setToast(true)} />
      </div>
      </div>
    </div>
  );
}
window.KaizenApp = App;
const _root = document.getElementById("root");
if (_root) ReactDOM.createRoot(_root).render(<App />);
}
(function waitForDS(){
  if (window.KaizenHealthDesignSystem_869e5e && window.KaizenIcons) boot();
  else setTimeout(waitForDS, 30);
})();
