---
name: removing-from-a-synced-copy-is-temporary
description: "Use when deleting or editing something in a directory that an install or sync script populates — installed skills, vendored dependencies, dotfiles, a deploy target, a generated config tree. The removal reverts at the next sync unless it also reaches the source the installer reads AND any explicit list the installer iterates. Trigga på 'radera', 'ta bort', 'städa', 'avinstallera', 'sync-skript', 'kommer tillbaka', 'installerad kopia', '~/.claude/skills', 'vendored', 'generated'."
metadata:
  origin: auto-extracted
---

# Att ta bort ur en synkad kopia är tillfälligt

**Extraherad:** 2026-09-15
**Sammanhang:** städning av 219 installerade skills i `~/.claude/skills`.

## Problem

En mapp som fylls av ett installations- eller synkskript är en **cache**. Att radera
där ser ut att fungera — filen är borta, räkningen stämmer, verifieringen blir grön —
men nästa körning av skriptet lägger tillbaka allt. Felet upptäcks dagar senare, som
"jag trodde vi tog bort den här".

Det finns **två** ytor att nå, och den andra är lätt att missa:

1. **Källträdet** som skriptet kopierar ifrån.
2. **En explicit lista i skriptet självt** — en array, ett manifest, en loop över
   namngivna poster. Att ta bort källmappen räcker inte om namnet står kvar i listan
   (då varnar skriptet på sin höjd), och att ta bort ur listan räcker inte om ett
   generellt "kopiera allt i katalogen"-steg fångar upp den ändå.

Samma sak gäller **ändringar**, inte bara raderingar: en redigering i den installerade
kopian skrivs över vid nästa synk. Det är den halvan man glömmer, eftersom raderingen
känns som den riskabla operationen.

## Lösning

Läs installeraren **innan** du rör något, och lös ut vad den skulle återskapa:

1. Öppna skriptet. Hitta varje mekanism som skriver till målet — både
   "för varje katalog i källan"-loopar och hårdkodade listor.
2. Skär din ändringslista mot det: vilka av mina poster har en källa?
3. Ta bort eller ändra på **alla** ytor som träffar posten.
4. Verifiera genom att låta installeraren avgöra, inte genom att titta i målmappen.

```bash
# vilka av mina mal skulle komma tillbaka?
for n in $(cat mina-mal.txt); do
  [ -f "$KALLA/$n/MANIFEST" ] && echo "$n -> finns i kallan, maste bort dar ocksa"
done
# och: star namnet kvar i skriptets egen lista?
grep -n "$n" installeraren.ps1
```

## Exempel

`sync-skills.ps1` har båda ytorna: ett steg kopierar **varje** mapp med `SKILL.md` ur
skill-repot (med `Remove-Item` + `Copy-Item` — blint), och en separat `$hemfrid`-array
räknar upp enskilda skills med explicita källsökvägar.

Av 219 skills som togs bort ur `~/.claude/skills` låg 39 även i repot — de hade
återinstallerats vid nästa körning. Två andra stod i arrayen och krävde att posten
ströks ur skriptet. 180 fanns bara lokalt och var omedelbart klara. Samma uppslagning
behövdes åt andra hållet för 15 redigerade filer: de med källa speglades tillbaka,
tre saknade källa och var därmed säkra.

## When to Use

- Innan du raderar, flyttar eller redigerar något i en katalog som ett skript fyller.
- När något du "redan tagit bort" dyker upp igen.
- När du städar installerade skills, vendorade beroenden, genererad konfiguration,
  dotfiles eller ett deploy-mål.
- Efter varje sådan städning: kontrollera att installerarens egna listor inte pekar
  på det som är borta — en död post ger antingen en tyst varning eller en återskapad fil.
