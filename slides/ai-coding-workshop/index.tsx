import type { DesignSystem, Page, SlideMeta, SlideTransition } from '@open-slide/core';
import { useSlidePageNumber } from '@open-slide/core';

export const design: DesignSystem = {
  palette: {
    bg: '#f7f5f0',
    text: '#162033',
    accent: '#e07a5f',
  },
  fonts: {
    display: 'Georgia, "Iowan Old Style", "Palatino Linotype", serif',
    body: '"Inter", "SF Pro Text", system-ui, -apple-system, sans-serif',
  },
  typeScale: {
    hero: 152,
    body: 38,
  },
  radius: 12,
};

const palette = {
  bg: design.palette.bg,
  text: design.palette.text,
  accent: design.palette.accent,
  muted: '#5c6478',
  dim: '#9aa3b5',
  teal: '#2a9d8f',
  surface: '#efeae2',
  border: 'rgba(22, 32, 51, 0.12)',
  accentSoft: 'rgba(224, 122, 95, 0.14)',
};

const pad = 120;

const fill = {
  width: '100%',
  height: '100%',
  background: 'var(--osd-bg)',
  color: 'var(--osd-text)',
  fontFamily: 'var(--osd-font-body)',
  overflow: 'hidden',
  position: 'relative' as const,
};

const styles = `
  @keyframes acw-fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes acw-fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .acw-rise {
    animation: acw-fadeUp 0.55s cubic-bezier(0, 0, 0.2, 1) both;
  }
  .acw-rise-d1 { animation-delay: 0.08s; }
  .acw-rise-d2 { animation-delay: 0.16s; }
  .acw-rise-d3 { animation-delay: 0.24s; }
  .acw-rise-d4 { animation-delay: 0.32s; }
  .acw-rise-d5 { animation-delay: 0.4s; }
`;

const EASE_OUT = 'cubic-bezier(0, 0, 0.2, 1)';
const EASE_IN = 'cubic-bezier(0.4, 0, 1, 1)';

export const transition: SlideTransition = {
  duration: 200,
  exit: {
    duration: 140,
    easing: EASE_IN,
    keyframes: [
      { opacity: 1, transform: 'translateY(0)' },
      { opacity: 0, transform: 'translateY(-4px)' },
    ],
  },
  enter: {
    duration: 200,
    delay: 80,
    easing: EASE_OUT,
    keyframes: [
      { opacity: 0, transform: 'translateY(6px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ],
  },
};

const StyleInjector = () => <style>{styles}</style>;

const Footer = () => {
  const { current, total } = useSlidePageNumber();
  return (
    <div
      style={{
        position: 'absolute',
        left: pad,
        right: pad,
        bottom: 56,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 24,
        color: palette.dim,
        letterSpacing: '0.04em',
      }}
    >
      <span style={{ color: palette.muted }}>AI Coding Workshop</span>
      <span>
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
    </div>
  );
};

const AccentBar = ({ top = pad }: { top?: number }) => (
  <div
    style={{
      position: 'absolute',
      left: pad,
      top,
      width: 72,
      height: 6,
      borderRadius: 3,
      background: 'var(--osd-accent)',
    }}
  />
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul
    style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontSize: 'var(--osd-size-body)',
      lineHeight: 1.55,
      color: palette.text,
    }}
  >
    {items.map((text, i) => (
      <li
        key={text}
        className={`acw-rise acw-rise-d${i + 1}`}
        style={{
          display: 'flex',
          gap: 24,
          alignItems: 'flex-start',
          marginBottom: i < items.length - 1 ? 36 : 0,
        }}
      >
        <span
          style={{
            flexShrink: 0,
            width: 12,
            height: 12,
            marginTop: 16,
            borderRadius: '50%',
            background: i % 2 === 0 ? 'var(--osd-accent)' : palette.teal,
          }}
        />
        <span>{text}</span>
      </li>
    ))}
  </ul>
);

const Cover: Page = () => (
  <div style={{ ...fill, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `0 ${pad}px` }}>
    <StyleInjector />
    <div
      className="acw-rise"
      style={{
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: palette.teal,
        marginBottom: 28,
      }}
    >
      Hands-on · 2 hours
    </div>
    <h1
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 'var(--osd-size-hero)',
        fontWeight: 700,
        lineHeight: 1.05,
        margin: 0,
        maxWidth: 1500,
        letterSpacing: '-0.02em',
      }}
    >
      From Idea to Website
    </h1>
    <p
      className="acw-rise acw-rise-d2"
      style={{
        fontSize: 52,
        lineHeight: 1.35,
        color: palette.muted,
        margin: '40px 0 0',
        maxWidth: 1200,
        fontWeight: 400,
      }}
    >
      AI coding for beginners — build a real one-page site today.
    </p>
    <div
      className="acw-rise acw-rise-d3"
      style={{
        marginTop: 72,
        padding: '28px 36px',
        background: palette.surface,
        borderRadius: 'var(--osd-radius)',
        border: `1px solid ${palette.border}`,
        maxWidth: 900,
        fontSize: 30,
        color: palette.muted,
        lineHeight: 1.5,
      }}
    >
      No prior coding experience required — laptop + curiosity.
    </div>
  </div>
);

const Agenda: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <AccentBar />
    <h2
      className="acw-rise"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 88,
        fontWeight: 700,
        margin: '28px 0 56px',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
      }}
    >
      Today&apos;s flow
    </h2>
    <div className="acw-rise acw-rise-d1">
      <BulletList
        items={[
          'Warm start — what you already use AI for',
          'AI is not magic — how models actually behave',
          'A practical workflow you can reuse every day',
          'Live demo + hands-on build (portfolio or business site)',
          'Close — your site ships before you leave',
        ]}
      />
    </div>
    <Footer />
  </div>
);

const WhoItsFor: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <div
      className="acw-rise"
      style={{
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: palette.teal,
        marginBottom: 20,
      }}
    >
      Warm start
    </div>
    <h2
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 700,
        margin: '0 0 48px',
        lineHeight: 1.12,
        maxWidth: 1400,
      }}
    >
      Built for beginners who want results, not jargon.
    </h2>
    <BulletList
      items={[
        'Career shifters, students, freelancers, small business owners',
        'You leave with a working portfolio or landing page',
        'Show of hands: who uses AI weekly? Who has coded with AI?',
      ]}
    />
    <Footer />
  </div>
);

const NotMagic: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <AccentBar />
    <h2
      className="acw-rise"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 88,
        fontWeight: 700,
        margin: '28px 0 48px',
        lineHeight: 1.08,
        maxWidth: 1500,
      }}
    >
      AI is not magic
    </h2>
    <BulletList
      items={[
        'Models predict likely text — powerful pattern matching, not mind-reading',
        'They can be confidently wrong or invent APIs that do not exist',
        'Your job: clear goals, good context, read outputs, test, iterate',
      ]}
    />
    <div
      className="acw-rise acw-rise-d4"
      style={{
        position: 'absolute',
        right: pad,
        bottom: 120,
        width: 420,
        padding: '32px 36px',
        background: palette.accentSoft,
        borderRadius: 'var(--osd-radius)',
        borderLeft: `6px solid var(--osd-accent)`,
        fontSize: 32,
        lineHeight: 1.45,
        color: palette.muted,
      }}
    >
      Treat AI as a coding partner — not an autopilot.
    </div>
    <Footer />
  </div>
);

const Workflow: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <div
      className="acw-rise"
      style={{
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: palette.teal,
        marginBottom: 20,
      }}
    >
      Core skill
    </div>
    <h2
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 76,
        fontWeight: 700,
        margin: '0 0 44px',
        lineHeight: 1.1,
      }}
    >
      The workflow that actually works
    </h2>
    <BulletList
      items={[
        'State the goal — files, framework, constraints, error messages',
        'Ask for a plan before you ask for code',
        'Apply small changes, run the site, feed results back',
      ]}
    />
    <Footer />
  </div>
);

const Prompting: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <AccentBar />
    <h2
      className="acw-rise"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 700,
        margin: '28px 0 44px',
        lineHeight: 1.1,
      }}
    >
      Prompts worth memorizing
    </h2>
    <BulletList
      items={[
        '“Ask me questions before you write any code.”',
        '“Make the smallest possible change — explain tradeoffs.”',
        '“Here is the error — diagnose before fixing.”',
      ]}
    />
    <Footer />
  </div>
);

const PickTrack: Page = () => (
  <div style={{ ...fill, padding: pad }}>
    <StyleInjector />
    <h2
      className="acw-rise"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 80,
        fontWeight: 700,
        margin: '0 0 56px',
        lineHeight: 1.1,
      }}
    >
      Pick your project
    </h2>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
      <div
        className="acw-rise acw-rise-d1"
        style={{
          padding: '48px 52px',
          background: palette.surface,
          borderRadius: 'var(--osd-radius)',
          border: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--osd-accent)',
            marginBottom: 20,
          }}
        >
          Track A
        </div>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Personal portfolio
        </div>
        <p style={{ fontSize: 34, lineHeight: 1.5, color: palette.muted, margin: 0 }}>
          Showcase you — photo, bio, projects, contact.
        </p>
      </div>
      <div
        className="acw-rise acw-rise-d2"
        style={{
          padding: '48px 52px',
          background: palette.surface,
          borderRadius: 'var(--osd-radius)',
          border: `1px solid ${palette.border}`,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: palette.teal,
            marginBottom: 20,
          }}
        >
          Track B
        </div>
        <div
          style={{
            fontFamily: 'var(--osd-font-display)',
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            marginBottom: 24,
          }}
        >
          Business landing page
        </div>
        <p style={{ fontSize: 34, lineHeight: 1.5, color: palette.muted, margin: 0 }}>
          One page that explains what you offer and how to reach you.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

const Closing: Page = () => (
  <div
    style={{
      ...fill,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `0 ${pad}px`,
      background: `linear-gradient(165deg, ${palette.bg} 0%, ${palette.surface} 100%)`,
    }}
  >
    <StyleInjector />
    <div
      className="acw-rise"
      style={{
        fontSize: 26,
        fontWeight: 600,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: palette.teal,
        marginBottom: 24,
      }}
    >
      Before you go
    </div>
    <h2
      className="acw-rise acw-rise-d1"
      style={{
        fontFamily: 'var(--osd-font-display)',
        fontSize: 108,
        fontWeight: 700,
        margin: 0,
        lineHeight: 1.05,
        maxWidth: 1500,
        letterSpacing: '-0.02em',
      }}
    >
      Ship something real. Keep iterating.
    </h2>
    <p
      className="acw-rise acw-rise-d2"
      style={{
        fontSize: 44,
        lineHeight: 1.45,
        color: palette.muted,
        margin: '48px 0 0',
        maxWidth: 1100,
      }}
    >
      You will have a live one-page site and a workflow to improve it with AI after today.
    </p>
    <div
      className="acw-rise acw-rise-d3"
      style={{
        marginTop: 64,
        fontSize: 32,
        color: palette.dim,
        letterSpacing: '0.06em',
      }}
    >
      Questions welcome — let&apos;s build.
    </div>
  </div>
);

export const meta: SlideMeta = {
  title: 'From Idea to Website',
  createdAt: '2026-05-26T18:26:53.426Z',
};

export default [
  Cover,
  Agenda,
  WhoItsFor,
  NotMagic,
  Workflow,
  Prompting,
  PickTrack,
  Closing,
] satisfies Page[];
