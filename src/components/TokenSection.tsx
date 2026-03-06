"use client";

import { useState, useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getStoredToken() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem("telegram_bot_token") ?? "";
}

export default function TokenSection() {
  const storedToken = useSyncExternalStore(subscribe, getStoredToken, () => "");
  const hasStoredToken = storedToken !== "";
  
  const [isSaved, setIsSaved] = useState(hasStoredToken);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const handleSave = () => {
    if (!token.trim()) return;
    
    setIsLoading(true);
    
    // Simulate fast save - hide immediately like lightning
    setTimeout(() => {
      localStorage.setItem("telegram_bot_token", token);
      setIsSaved(true);
      setIsLoading(false);
    }, 300);
  };

  const handleReset = () => {
    localStorage.removeItem("telegram_bot_token");
    setToken("");
    setIsSaved(false);
  };

  if (isSaved) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">تم حفظ التوكن ✅</h3>
            <p className="text-gray-400 mb-6">تم تخزين توكن البوت بشكل آمن في متصفحك</p>
            <button
              onClick={handleReset}
              className="text-sm text-red-400 hover:text-red-300 transition-colors"
            >
              إعادة تعيين التوكن
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="glass rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-3">توكن البوت 🔐</h2>
            <p className="text-gray-400">
              أدخل توكن بوت تيليجرام الخاص بك<br />
              <span className="text-sm text-gray-500">سيتم حفظه محلياً في متصفحك فقط</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="1234567890:ABCdefGHIjklMNOpqrsTUVwxyz"
                className="w-full bg-[#0d1525] border border-gray-700 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-mono text-sm"
                onKeyDown={(e) => e.key === "Enter" && handleSave()}
              />
            </div>

            <button
              onClick={handleSave}
              disabled={!token.trim() || isLoading}
              className="w-full btn-primary py-4 rounded-xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  جاري الحفظ...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  حفظ التوكن
                </>
              )}
            </button>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            👉 احصل على التوكن من @BotFather في تيليجرام
          </p>
        </div>
      </div>
    </section>
  );
}
