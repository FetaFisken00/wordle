import React, { useState, useRef } from "react";
import Wordle from "./Wordle";
import { v4 as uuid } from "uuid";

const LETTER_COUNT: number = 30;
// const wordKey: string = "LOCKS";

interface LETTER_LIST_INTERFACE {
    key: string;
    char?: string;
    state?: string;
}

function App() {
    const [letterList, setLetterList] = useState<LETTER_LIST_INTERFACE[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    if (letterList.length === 0) {
        let tempList: LETTER_LIST_INTERFACE[] = [];
        for (let i = 0; i < LETTER_COUNT; i++) {
            tempList.push({
                key: uuid(),
                char: undefined,
                state: undefined,
            });
        }
        setLetterList(tempList);
    }

    function sanitizeInput() {
        
    }

    function handleAnswer() {
        console.log('HEOLO')
    }

    function handleInput(e: any) {
        console.log(e);
        const input = (inputRef.current as HTMLInputElement).value;
        const newLetterList = [...letterList];

        let lastLetter: number = newLetterList.length - 1;
        let wordIndexStart: number = 0;
        let wordIndexEnd: number = 0;

        if (!(input.charAt(input.length - 1).toUpperCase() !== input.charAt(input.length - 1).toLowerCase()) && input.length !== 0) {
            (inputRef.current as HTMLInputElement).value = input.slice(0, input.length - 1);
            return;
        }

        if (input.length > 5) {
            (inputRef.current as HTMLInputElement).value = input.slice(0, 5);
            return;
        }

        while (lastLetter > 0) {
            if (newLetterList[lastLetter].char) {
                break;
            }
            lastLetter--;
        }

        // TODO: This needs to be a seperate function
        if (lastLetter < 5) {
            wordIndexStart = 0;
            wordIndexEnd = 4;
        }

        for (let i = wordIndexStart; i <= wordIndexEnd; i++) {
            const test = newLetterList[i];
            if (input.charAt(i)) {
                test.char = input.charAt(i);
                test.state = "active";
                continue;
            }
            test.char = undefined;
            test.state = undefined;
        }

        setLetterList(newLetterList);
    }

    return (
        <>
            <input id="wordleGuessInputBox" ref={inputRef} onChange={handleInput} onKeyPress={(e) => e.key === "Enter" && handleAnswer()} type="text" />
            <Wordle letterList={letterList} />
        </>
    );
}

export default App;

 // document.addEventListener("keydown", function (event) {
        //     if (event.ctrlKey || (event.altKey && event.key === "Backspace")) {
        //         console.log(event);
        //         event.preventDefault();
        //         // console.log("ctrl Backspace");
        //         return;
        //     }
        //     if (event.key === "ArrowUp" || event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "ArrowLeft") {
        //         console.log(event);
        //         event.preventDefault();
        //         return;
        //     }
        //     if (event.key === "Home" || event.key === "End") {
        //         console.log(event);
        //         event.preventDefault();
        //         return;
        //     }
        //     if (event.key === "Enter" && input.length === 5) {
        //         console.log("ENTER");
        //         // TODO: MAKE ENTER KEY WORK
        //         for (let i = 0; i < input.length; i++) {
        //             console.log(i);
        //             const test = newLetterList[i];
        //             if (input.charAt(i) === WORD.charAt(i)) {
        //                 console.log('correct')
        //                 test.state = "correct";
        //                 return;
        //             }
        //             if (WORD.split("").includes(input.split("")[i])) {
        //                 console.log('wrong-location')
        //                 test.state = "wrong-location";
        //                 return;
        //             }
        //             console.log('wrong')
        //             test.state = "wrong";
        //             setLetterList(newLetterList)
        //         }
        //         return;
        //     }
        // });