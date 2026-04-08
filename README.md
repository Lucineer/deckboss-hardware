# Deckboss Hardware

> [Deckboss.net](https://deckboss.net) — preloaded physical units for the Cocapn ecosystem.

## Available Units

### Deckboss Nano — $299
- Raspberry Pi 5, 8GB RAM
- 256GB NVMe storage
- Preloaded: Deckboss + Cocapn + Capitaine (cold)
- Best for: single-sensor monitoring, simple automation
- Power: USB-C or 12V

### Deckboss Standard — $599
- Jetson Super Orin Nano, 8GB shared
- 2TB NVMe storage
- Preloaded: Deckboss + Cocapn + Capitaine (cold)
- Local models: Whisper medium, Piper TTS, Phi-3-mini Q4
- Best for: multi-sensor systems, vision, STT/TTS
- Power: 12V marine or PoE
- WiFi + USB-C + 2× USB 3.0 + CSI camera

### Deckboss Pro — $1,199
- 2× Jetson Super Orin Nano, 8GB each
- 2× 2TB NVMe storage
- Gigabit interconnect between units
- Preloaded with load-balanced fleet orchestration
- Best for: complex robotics, parallel inference, dual-pipeline systems
- Power: 12V marine
- Same I/O × 2

### Deckboss Enterprise — $1,499
- 4× Raspberry Pi 5, 8GB each
- 4× 256GB NVMe storage
- Gigabit switch integrated
- Preloaded with distributed sensor network stack
- Best for: distributed monitoring, multi-location systems
- Power: 12V marine
- Same I/O × 4

## What's Preloaded

Every unit ships with:
- **Deckboss** — build-phase chatbot (cloud-connected trial included)
- **Cocapn runtime** — service-phase agent (ready to activate after handoff)
- **Capitaine** — cold storage (unlocks with Capitaine.ai membership)
- **Base fleet templates** — common agent patterns for maritime, monitoring, automation
- **Local models** — Whisper (STT), Piper (TTS), Phi-3-mini (LLM)
- **Emergency firmware** — SD card with JetPack installer for firmware updates

## First Boot

1. Plug in power (12V marine or USB-C)
2. Wait for boot LED (solid green = ready)
3. Connect phone to WiFi network: `DECKBOSS-XXXX`
4. Open browser → http://192.168.4.1
5. Follow setup wizard (WiFi, accounts, API keys)
6. Deckboss comes online in Telegram/Discord
7. Start building

## Firmware Updates

Off-the-shelf Jetson units may need JetPack 6.x update before first use:
1. Insert included SD card
2. Boot from SD (holds reset during power-on)
3. JetPack installer auto-runs
4. System installs to NVMe (~10 min)
5. Reboot from NVMe (remove SD)
6. All preloaded software preserved on secondary partition

## Accessories

| Accessory | Price | Compatible |
|-----------|-------|------------|
| USB thermal camera | $89 | All units |
| CSI camera (RGB) | $49 | Jetson units |
| IP67 enclosure | $79 | All units |
| 12V marine power cable | $29 | All units |
| USB GPS module | $39 | All units |
| External antenna kit | $49 | All units |
| 256GB SD backup card | $29 | All units |

## Support

- [Deckboss.ai](https://deckboss.ai) — build-phase chatbot
- [Cocapn.com](https://cocapn.com) — membership and billing
- [GitHub](https://github.com/Lucineer/deckboss-hardware) — open source docs
- Telegram: @deckboss-support

---

<i>Built by [Superinstance](https://github.com/superinstance) & [Lucineer](https://github.com/Lucineer) (DiGennaro et al.)</i>
