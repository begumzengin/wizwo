import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Word } from 'src/app/word';

@Component({
  selector: 'app-word-of-the-day',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './word-of-the-day.component.html',
  styleUrl: './word-of-the-day.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WordOfTheDayComponent {
  words: Word[] = [
    {
      word: 'serendipity',
      type: 'noun',
      pronunciation: 'ser-en-dip-i-tee',
      meaning:
        'the occurrence of events by chance in a happy or beneficial way',
      example: 'Meeting her was pure serendipity.',
    },
    {
      word: 'quixotic',
      type: 'adjective',
      pronunciation: 'kwik-sot-ik',
      meaning: 'exceedingly idealistic; unrealistic and impractical',
      example: 'His quixotic plans were doomed from the start.',
    },
    {
      word: 'mellifluous',
      type: 'adjective',
      pronunciation: 'mel-lif-loo-uhs',
      meaning: 'sweet or musical; pleasant to hear',
      example: 'Her mellifluous voice enchanted everyone.',
    },
    {
      word: 'ephemeral',
      type: 'adjective',
      pronunciation: 'ih-fem-er-uhl',
      meaning: 'lasting for a very short time',
      example: 'The beauty of the sunset was ephemeral.',
    },
    {
      word: 'lucid',
      type: 'adjective',
      pronunciation: 'loo-sid',
      meaning: 'expressed clearly; easy to understand',
      example: 'His explanation was lucid and to the point.',
    },
    {
      word: 'plethora',
      type: 'noun',
      pronunciation: 'ple-thor-uh',
      meaning: 'a large or excessive amount of something',
      example: 'She had a plethora of options to choose from.',
    },
    {
      word: 'quintessential',
      type: 'adjective',
      pronunciation: 'kwin-tuh-sen-shuhl',
      meaning:
        'representing the most perfect or typical example of a quality or class',
      example: 'She is the quintessential professional.',
    },
    {
      word: 'labyrinth',
      type: 'noun',
      pronunciation: 'lab-uh-rinth',
      meaning:
        "a complicated irregular network of passages or paths in which it is difficult to find one's way; a maze",
      example: "The city's streets were a labyrinth of alleys.",
    },
    {
      word: 'ineffable',
      type: 'adjective',
      pronunciation: 'in-ef-uh-buhl',
      meaning: 'too great or extreme to be expressed or described in words',
      example: 'The beauty of the landscape was ineffable.',
    },
    {
      word: 'epiphany',
      type: 'noun',
      pronunciation: 'ih-pif-uh-nee',
      meaning: 'a moment of sudden and great revelation or realization',
      example: "She had an epiphany about her life's purpose.",
    },
    {
      word: 'gossamer',
      type: 'adjective',
      pronunciation: 'gos-uh-mer',
      meaning:
        'used to refer to something very light, thin, and insubstantial or delicate',
      example: 'The gossamer fabric was almost transparent.',
    },
    {
      word: 'reverie',
      type: 'noun',
      pronunciation: 'rev-uh-ree',
      meaning: "a state of being pleasantly lost in one's thoughts; a daydream",
      example: 'He was lost in reverie during the meeting.',
    },
    {
      word: 'sonder',
      type: 'noun',
      pronunciation: 'son-der',
      meaning:
        'the realization that each random passerby is living a life as vivid and complex as your own',
      example: 'Walking through the city gave him a sense of sonder.',
    },
    {
      word: 'limerence',
      type: 'noun',
      pronunciation: 'lim-er-ence',
      meaning: 'the state of being infatuated with another person',
      example: 'Her limerence for him was obvious.',
    },
    {
      word: 'euphoria',
      type: 'noun',
      pronunciation: 'yoo-for-ee-uh',
      meaning: 'a feeling or state of intense excitement and happiness',
      example: 'The euphoria of victory was overwhelming.',
    },
    {
      word: 'sonder',
      type: 'noun',
      pronunciation: 'son-der',
      meaning:
        'the realization that each random passerby is living a life as vivid and complex as your own',
      example: 'Walking through the city gave him a sense of sonder.',
    },
    {
      word: 'halcyon',
      type: 'adjective',
      pronunciation: 'hal-see-uhn',
      meaning:
        'denoting a period of time in the past that was idyllically happy and peaceful',
      example: 'Those were the halcyon days of our youth.',
    },
    {
      word: 'languor',
      type: 'noun',
      pronunciation: 'lang-gor',
      meaning: 'the state or feeling, often pleasant, of tiredness or inertia',
      example: 'The languor of the hot summer afternoon was palpable.',
    },
    {
      word: 'zenith',
      type: 'noun',
      pronunciation: 'zee-nith',
      meaning: 'the time at which something is most powerful or successful',
      example: 'The company was at its zenith in the late 1990s.',
    },
    {
      word: 'bucolic',
      type: 'adjective',
      pronunciation: 'byoo-kol-ik',
      meaning:
        'relating to the pleasant aspects of the countryside and country life',
      example: "The bucolic scene was a stark contrast to the city's hustle.",
    },
  ];

  ngOnInit() {
    this.displayWordInfo();
  }

  getRandomWord() {
    const randomIndex = Math.floor(Math.random() * this.words.length);
    return this.words[randomIndex];
  }

  displayWordInfo() {
    const word = this.getRandomWord();
    document.getElementById('word')!.textContent = word.word;
    document.getElementById('type')!.textContent = word.type;
    document.getElementById('pronunciation')!.textContent = word.pronunciation;
    document.getElementById('meaning')!.textContent = word.meaning;
    document.getElementById('example')!.textContent = word.example;
  }
}
