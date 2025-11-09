// Button removed: message updates on input change, so explicit generate button is unnecessary
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("");
  const [userName, setUserName] = useState<string>("GitHub User");

  // JavaScriptプログラムのロジック
  const createMessage = (name: string): string => {
    const greeting = "Hello";
    const target = name || "World";
    return `${greeting}, ${target}! Welcome to the conflict exercise.`;
  };

  // コンポーネントマウント時にメッセージを生成
  useEffect(() => {
    const generatedMessage = createMessage(userName);
    setMessage(generatedMessage);
  }, [userName]);

  const handleGenerateMessage = () => {
    const generatedMessage = createMessage(userName);
    setMessage(generatedMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{APP_TITLE}</h1>
          <p className="text-lg text-gray-600">GitHubコンフリクト体験演習</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg border-0 mb-8">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
            <CardTitle>メッセージジェネレーター</CardTitle>
            <CardDescription className="text-blue-100">
              JavaScriptプログラムをウェブサイトで実行します
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Input Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                お名前を入力してください
              </label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="GitHub User"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* ボタンは削除されました: 入力変更でメッセージが自動更新されます */}
          </CardContent>
        </Card>

        {/* Output Section */}
        {message && (
          <Card className="shadow-lg border-0 bg-white">
            <CardHeader className="bg-green-50 border-b border-green-200 rounded-t-lg">
              <CardTitle className="text-green-700">生成されたメッセージ</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <p className="text-xl font-semibold text-gray-900 break-words">
                  {message}
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-4 mb-6">
                このメッセージはJavaScriptプログラム（main.js）から生成されています。
              </p>
            </CardContent>
          </Card>
        )}

        {/* Info Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            このウェブサイトはGitHubコンフリクト体験演習用に設計されています。
          </p>
        </div>
      </div>
    </div>
  );
}
