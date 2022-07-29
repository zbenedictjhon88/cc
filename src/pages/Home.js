import React, { useState } from "react";

export default function Home() {

    const [message, setMessage] = useState('');

    const convert = (e) => {
        setMessage(e.target.value);
    }

    const upper = (e) => {
        e.preventDefault();
        setMessage(message.toUpperCase());
    }

    const lower = (e) => {
        e.preventDefault();
        setMessage(message.toLowerCase());
    }

    const capitalized = (e) => {
        e.preventDefault();
        const words = message.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setMessage(words);
    }

    const sentence = (e) => {
        e.preventDefault();
        const words = message.toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, letter => letter.toUpperCase());
        setMessage(words);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 text-center m-auto pv100">
                    <div className="cc-header">
                        <h2 className="cc-title">
                            Free Upper Lower <span>Case Converter</span> Tool
                        </h2>
                        <p className="cc-desc">
                            Easily convert the letters of your texts using our upper lower-case converter.
                        </p>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <label className="cc-label">Message</label>
                            <textarea className="form-control cc-textarea" value={message} name="message" onChange={convert}></textarea>
                            <div className="cc-btn">
                                <button className="btn btn-primary mr5" onClick={upper}>Upper Case</button>
                                <button className="btn btn-primary mr5" onClick={lower}>Lower Case</button>
                                <button className="btn btn-primary mr5" onClick={capitalized}>Capitalized Case</button>
                                <button className="btn btn-primary mr5" onClick={sentence}>Sentence Case</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 text-center m-auto pv100">
                    <div className="row">
                        <div className="cc-header">
                            <h2 className="cc-title">
                                How To Use Our Upper Lower Case Converter
                            </h2>
                            <p className="cc-desc">
                                Using this capitalizer tool is simple and automatic. You only need to follow 3 steps to convert your text into the correct format:
                            </p>
                        </div>
                        <div className="col-lg-12 is p10">
                            <div className="is-circle">
                                <span>01</span>
                            </div>
                            <div className="is-info">
                                Step 1 — Copy and paste a text. Enter the sentence, paragraph, or
                                document you want to convert in the upper box of the case conversion tool.
                                In this process, the spacing of the text is preserved, and the spacing,
                                fonts, and other aspects of the text are not changed.
                            </div>
                        </div>
                        <div className="col-lg-12 is p10">
                            <div className="is-circle">
                                <span>02</span>
                            </div>
                            <div className="is-info">
                                Step 2 — Choose one of the available options. Select the type of conversion you want
                                from the options available in the tool: standard uppercase, uppercase, lowercase, title
                                case, sentence case, uppercase, and click the convert button to make the desired change.
                            </div>
                        </div>
                        <div className="col-lg-12 is p10">
                            <div className="is-circle">
                                <span>03</span>
                            </div>
                            <div className="is-info">
                                Step 3 — Copy the converted text. You will see the converted text with the specified capitalization
                                style in the box below. Now you can select it manually and copy it by simply clicking “copy result”
                                to save it to your clipboard, and then you can use it.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

