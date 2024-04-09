# Demo-Client-Test README


Dieses Repository enthält die Testfälle und die Automatisierungs-Skripte für die "demo-client-test" Anwendung, die mit Playwright für End-to-End-Testing entwickelt wurden. Ziel dieser Tests ist es, die Zuverlässigkeit und Stabilität der Anwendung durch automatisierte und manuelle Tests sicherzustellen.


## Voraussetzungen
Um die Testfälle auszuführen, müssen Sie folgende Software auf Ihrem System installiert haben:

- Node.js (empfohlene Version: 14.x oder höher)
- npm (wird mit Node.js installiert)
- Playwright

## Installation
Führen Sie die folgenden Schritte aus, um die Testumgebung einzurichten:

1. Klonen Sie das Repository auf Ihr lokales System:
```bash
git clone https://github.com/galaniprojects/demo-client-test.git
```
2. Wechseln Sie in das Verzeichnis des geklonten Repositories:
```bash
cd demo-client-test
```
3. Wechseln Sie in das Verzeichnis des geklonten Repositories:
```Copy code
npm install
```


## Testfälle ausführen

Um die Testfälle auszuführen, verwenden Sie den folgenden Befehl:

```bash
npx playwright test
```

Dieser Befehl führt alle Testfälle im tests-Verzeichnis aus. Sie können auch spezifische Testfälle ausführen, indem Sie den Dateinamen als Argument hinzufügen:

```bash
npx playwright test tests/Test-Cases.spec.ts
```

## Testfälle

Die Testfälle umfassen verschiedene Aspekte der Anwendung, einschließlich:

- Neuregistrierung eines Benutzers
- Erstellung einer neuen Identität
- Erstellung eines CType
- Erstellung und Attestierung von Claims
- Erstellung von Delegierungen

Details zu den Testfällen finden Sie in den Kommentaren innerhalb der Testskripte.

## Beiträge

Beiträge sind willkommen! Wenn Sie Fehler finden oder Verbesserungen vorschlagen möchten, kontaktieren Sie mich unter zeneli@galaniprojects.com .
