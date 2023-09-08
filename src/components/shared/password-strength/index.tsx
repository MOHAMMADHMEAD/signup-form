import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import "./style.css"
const PasswordStrengthBar: React.FC<any> = ({ password }) => {
    const result = zxcvbn(password);
    let strength = result.score;

    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)){
        strength=password.length?1:0
    }

    return (
        <div>
            <div className="w-full h-[10px] border border-gray-400 mt-4 rounded">
                <div
                    className={`bar strength-${strength}`}
                    style={{ width: `${(strength / 4) * 100}%` }}
                />
            </div>
        </div>
    );
};


export default PasswordStrengthBar;
