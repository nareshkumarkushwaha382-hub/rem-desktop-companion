# Rem Desktop Companion 🌌

An independent Windows desktop companion project featuring Rem from
*Re:ZERO -Starting Life in Another World-*.

The goal is to create a small desktop application where Rem can live
on the user's screen, move around, react to interactions, and eventually
behave autonomously and speak.

> This project is separate from DREAM REM SQUAD (DRS).

---

## 🌌 Vision

Rem should feel like a character who is actually present on the desktop,
rather than a normal application window.

The long-term vision is an autonomous desktop companion that can:

- Stay visible over the desktop
- Move around independently
- Perform idle animations
- React to user interactions
- Display speech bubbles
- Initiate conversations or comments on her own
- Remember local settings
- Eventually speak using text-to-speech
- Potentially use an AI conversation system in a future version

---

## 🎯 Development Philosophy

The project will be developed gradually.

We will first build the desktop companion itself and only add complex
systems such as voice and AI after the basic application is stable.

The application should remain:

- Lightweight
- Responsive
- Customizable
- Privacy-conscious
- Easy to maintain
- Independent from DRS

---

## 🛠️ Technology

### Target platform

**Windows first**

Other platforms may be considered later.

### Planned framework

**Tauri 2**

The frontend will initially use:

- HTML
- CSS
- TypeScript

Native desktop functionality will use Tauri/Rust where necessary.

---

## 🗺️ Roadmap

### Phase 1 — Desktop Presence

- [ ] Create Tauri application
- [ ] Transparent window
- [ ] Frameless window
- [ ] Always-on-top behavior
- [ ] Display Rem
- [ ] Resize Rem
- [ ] Drag Rem
- [ ] Hide/show Rem

### Phase 2 — Movement

- [ ] Idle behavior
- [ ] Walking
- [ ] Turning
- [ ] Sitting
- [ ] Sleeping
- [ ] Waking
- [ ] Screen-edge behavior
- [ ] Autonomous movement

### Phase 3 — Personality

- [ ] Behavior engine
- [ ] Random idle actions
- [ ] Context-based reactions
- [ ] Expressions
- [ ] Autonomous text dialogue
- [ ] Dialogue cooldown system
- [ ] Quiet hours

### Phase 4 — Interaction

- [ ] Click reactions
- [ ] Drag reactions
- [ ] Double-click interaction
- [ ] Speech bubbles
- [ ] Context menu
- [ ] Settings window

### Phase 5 — Local Memory

- [ ] Save Rem's position
- [ ] Save size
- [ ] Save preferences
- [ ] Save behavior settings
- [ ] Startup preference
- [ ] Volume settings

### Phase 6 — Voice

- [ ] Text-to-speech system
- [ ] Voice enable/disable
- [ ] Volume control
- [ ] Speech cooldown
- [ ] Quiet hours
- [ ] Voice-triggered autonomous dialogue

### Phase 7 — Optional AI

Possible future features:

- [ ] AI-generated dialogue
- [ ] Conversation system
- [ ] Optional conversation memory
- [ ] Context-aware responses

AI will remain optional and will be considered only after the
core companion is stable.

---

## 🧠 Architecture

The project will keep Rem's behavior separate from her visual
presentation and voice system.

```text
                 REM COMPANION
                       │
                ┌──────┴──────┐
                │             │
          Visual System   Behavior System
                │             │
          Animations      Movement
          Expressions     Idle actions
          Rendering       Reactions
                              │
                              ↓
                       Dialogue System
                              │
                    ┌─────────┴─────────┐
                    │                   │
              Speech Bubble          Voice
                                      │
                              Future TTS system
