import React, { useState, useRef } from "react";
import Wordle from "./Wordle";
import Keyboard from "./Keyboard";
import { v4 as uuid } from "uuid";
import "./temp.css";

import answers from "./answers.json";
import word_key from "./valid_words.json";

const LETTER_COUNT: number = 30;
const WORD_LENGTH: number = 5;

let expectedWord = answers[Math.floor(Math.random() * answers.length)];
console.log(expectedWord);

interface tileListInterface {
    key: string;
    letter?: string;
    state?: string;
}

function App(): JSX.Element {
    const [tileList, setTileList] = useState<tileListInterface[]>([]);
    const [keyList, setKeyList] = useState([
        {
            letter_q: {
                key: uuid(),
                letter: "q",
                class: "key",
            },
            letter_w: {
                key: uuid(),
                letter: "w",
                class: "key",
            },
            letter_e: {
                key: uuid(),
                letter: "e",
                class: "key",
            },
            letter_r: {
                key: uuid(),
                letter: "r",
                class: "key",
            },
            letter_t: {
                key: uuid(),
                letter: "t",
                class: "key",
            },
            letter_y: {
                key: uuid(),
                letter: "y",
                class: "key",
            },
            letter_u: {
                key: uuid(),
                letter: "u",
                class: "key",
            },
            letter_i: {
                key: uuid(),
                letter: "i",
                class: "key",
            },
            letter_o: {
                key: uuid(),
                letter: "o",
                class: "key",
            },
            letter_p: {
                key: uuid(),
                letter: "p",
                class: "key",
            },
            letter_å: {
                key: uuid(),
                letter: "å",
                class: "key",
            },
            letter_a: {
                key: uuid(),
                letter: "a",
                class: "key",
            },
            letter_s: {
                key: uuid(),
                letter: "s",
                class: "key",
            },
            letter_d: {
                key: uuid(),
                letter: "d",
                class: "key",
            },
            letter_f: {
                key: uuid(),
                letter: "f",
                class: "key",
            },
            letter_g: {
                key: uuid(),
                letter: "g",
                class: "key",
            },
            letter_h: {
                key: uuid(),
                letter: "h",
                class: "key",
            },
            letter_j: {
                key: uuid(),
                letter: "j",
                class: "key",
            },
            letter_k: {
                key: uuid(),
                letter: "k",
                class: "key",
            },
            letter_l: {
                key: uuid(),
                letter: "l",
                class: "key",
            },
            letter_ö: {
                key: uuid(),
                letter: "ö",
                class: "key",
            },
            letter_ä: {
                key: uuid(),
                letter: "ä",
                class: "key",
            },
            letter_z: {
                key: uuid(),
                letter: "z",
                class: "key",
            },
            letter_x: {
                key: uuid(),
                letter: "x",
                class: "key",
            },
            letter_c: {
                key: uuid(),
                letter: "c",
                class: "key",
            },
            letter_v: {
                key: uuid(),
                letter: "v",
                class: "key",
            },
            letter_b: {
                key: uuid(),
                letter: "b",
                class: "key",
            },
            letter_n: {
                key: uuid(),
                letter: "n",
                class: "key",
            },
            letter_m: {
                key: uuid(),
                letter: "m",
                class: "key",
            },
        },
    ]);
    const inputRef = useRef<HTMLInputElement>(null);

    if (tileList.length === 0) {
        let newTileList: any[] = [];

        for (let i = 0; i < LETTER_COUNT; i++) {
            newTileList.push({
                key: uuid(),
                letter: undefined,
                state: undefined,
            });
        }
        // console.log(newTileList);

        setTileList(newTileList);
    }

    /**
     * TODO: define keyPress
     * TODO: Change name of keyPress to keyEvent
     * @param keyPress
     * @returns void
     */
    function sanitizeInput(keyPress: any): void {
        const keyWhitelistLookup: string[] = [
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p",
            "å",
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "ö",
            "ä",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            "enter",
            "space",
            "backspace",
        ];
        // Checks if there is a key modifier applied, for ctrl-backspace
        if (keyPress.ctrlKey || keyPress.altKey) {
            console.log("ctrl/alt");
            keyPress.preventDefault();
            return;
        }
        // Checks if its a part of the whitelist, if it is it returns false and continues, if not part of the whitelist it blocks the keypress and returns
        if (!keyWhitelistLookup.includes(keyPress.key.toLowerCase())) {
            keyPress.preventDefault();
            return;
        }
        // Enter key press for checking answer
        if (keyPress.key === "Enter") {
            handleAnswer();
            return;
        }
        // console.log(keyPress);
    }

    /**
     *
     * @returns The starting and ending index of the current word relative to [tileList]
     */
    function getWordRange(): [number, number] {
        let i: number = tileList.length;
        while (i > 0) {
            const tileListIndex: number = i - 1;
            if (tileList[tileListIndex].state !== undefined && tileList[tileListIndex].state !== "active") {
                break;
            }
            i--;
        }
        return [i, i + 4];
    }

    function setKeyboardStateCorrect(userInputLetter: string) {
        for (const [k, v] of Object.entries(keyList[0])) {
            if (v.letter === userInputLetter) {
                v.class = "key correct";
                console.log(v.letter, k);
            }
        }
    }

    function setKeyboardStateWrong(userInputLetter: string) {
        for (const [k, v] of Object.entries(keyList[0])) {
            if (v.letter === userInputLetter) {
                v.class = "key wrong";
                console.log(v.letter, k);
            }
        }
    }

    function setKeyboardStateWrongLocation(userInputLetter: string) {
        for (const [k, v] of Object.entries(keyList[0])) {
            if (v.letter === userInputLetter) {
                v.class = "key wrong-location";
                console.log(v.letter, k);
            }
        }
    }

    // function handleButtonPress(e: any) {
    //     console.log(e)
    // }

    /**
     * TODO: Fix edge cases, also get do bug testing :)
     * TODO: Make it so that it takes a random word from a json file, i.e not using wordkey thats the same all the time, sorta done
     * TODO: Fix the god awful working
     * @returns void
     */
    function handleAnswer() {
        const input = inputRef.current as HTMLInputElement;
        const newTileList = [...tileList];
        const wordKey: string[] = expectedWord.split("");
        const [offset] = getWordRange();

        if (input.value.length !== 5) return;
        // if (!(wordKey.includes(input.value) || word_key.includes(input.value))) return;

        for (let i = 0; i < WORD_LENGTH; i++) {
            // If the character is in the correct position
            if (input.value.charAt(i).toLocaleLowerCase() === wordKey[i].toLocaleLowerCase()) {
                newTileList[i + offset].state = "correct";
                setKeyboardStateCorrect(input.value.charAt(i));
                continue;
            }
            // If the character exists but not in the right spot
            if (wordKey.includes(input.value.charAt(i).toLocaleLowerCase())) {
                newTileList[i + offset].state = "wrong-location";
                setKeyboardStateWrongLocation(input.value.charAt(i));
                continue;
            }
            // Unused character, i.e data-state gets set to wrong
            newTileList[i + offset].state = "wrong";
            setKeyboardStateWrong(input.value.charAt(i));
        }

        input.value = "";
        setTileList(newTileList);
    }

    /**
     *
     * @returns void
     */
    function handleInput(event?: any): void {
        if (event.target.dataset.enter) {
            console.log("enter work here");
            handleAnswer()
            return
        }

        if (event.target.dataset.delete) {
            const tempInputRef = (inputRef.current as HTMLInputElement).value;
            console.log("delte a char here",0,tempInputRef.length - 1);
            (inputRef.current as HTMLInputElement).value = tempInputRef.slice(0, tempInputRef.length - 1)
        }

        if (event.target.dataset.key && (inputRef.current as HTMLInputElement).value.length < 5) {
            (inputRef.current as HTMLInputElement).value += event.target.dataset.key;
            console.log(">>>>>", event.target.dataset.key);
        }

        const input = (inputRef.current as HTMLInputElement).value;
        const newTileList = [...tileList];
        const [indexStart, indexEnd] = getWordRange();

        if (input.length > 5) {
            (inputRef.current as HTMLInputElement).value = input.slice(0, 5);
            return;
        }

        for (let i = indexStart; i <= indexEnd; i++) {
            const tile = newTileList[i];
            if (input.charAt(i - indexStart)) {
                tile.letter = input.charAt(i - indexStart);
                tile.state = "active";
                continue;
            }
            tile.letter = undefined;
            tile.state = undefined;
        }
        setTileList(newTileList);
    }

    function FUNC_001(event:any) {
        console.log(event)
    }

    return (
        <div>
            <Wordle letterList={tileList}></Wordle>
            <Keyboard keyList={keyList} handleButtonPress={handleInput}></Keyboard>
            <input
                id="wordleGuessInputBox"
                ref={inputRef}
                onKeyDown={sanitizeInput}
                onChange={handleInput}
                type="text"
            />
        </div>
    );
}

export default App;
