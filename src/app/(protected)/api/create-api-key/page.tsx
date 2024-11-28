"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { cn } from "@/lib/utils";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "next-themes";

const codeExamples = {
  cURL: `curl -X POST \\
  'https://udemy-apim.azure-api.net/api/create-api-key' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -d '{
  "user_id": "your_user_id"
}'`,

  Python: `import requests

url = 'https://udemy-apim.azure-api.net/api/create-api-key'
payload = {
    'user_id': 'your_user_id'
}

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json'
}

response = requests.post(url, json=payload, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"API Key: {result['api_key']}")
else:
    print(f'Error: {response.status_code}')`,

  JavaScript: `const url = 'https://udemy-apim.azure-api.net/api/create-api-key';

const payload = {
  user_id: 'your_user_id'
};

fetch(url, {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(response => response.json())
.then(data => {
  console.log('API Key:', data.api_key);
})
.catch(error => console.error('Error:', error));`,

  PHP: `<?php
$url = 'https://udemy-apim.azure-api.net/api/create-api-key';

$payload = [
    'user_id' => 'your_user_id'
];

$ch = curl_init();

curl_setopt_array($ch, [
    CURLOPT_URL => $url,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_HTTPHEADER => [
        'accept: application/json',
        'Content-Type: application/json'
    ]
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpcode === 200) {
    $result = json_decode($response, true);
    echo "API Key: " . $result['api_key'] . "\\n";
} else {
    echo "Error: $httpcode\\n";
}`,

  Go: `package main

import (
    "bytes"
    "encoding/json"
    "fmt"
    "io/ioutil"
    "net/http"
)

type CreateKeyRequest struct {
    UserID string \`json:"user_id"\`
}

type CreateKeyResponse struct {
    APIKey string \`json:"api_key"\`
}

func main() {
    url := "https://udemy-apim.azure-api.net/api/create-api-key"
    
    payload := CreateKeyRequest{
        UserID: "your_user_id",
    }
    
    jsonData, err := json.Marshal(payload)
    if err != nil {
        fmt.Printf("Error encoding payload: %v\\n", err)
        return
    }
    
    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    if err != nil {
        fmt.Printf("Error creating request: %v\\n", err)
        return
    }
    
    req.Header.Add("accept", "application/json")
    req.Header.Add("Content-Type", "application/json")
    
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        fmt.Printf("Error making request: %v\\n", err)
        return
    }
    defer resp.Body.Close()
    
    if resp.StatusCode == http.StatusOK {
        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            fmt.Printf("Error reading response: %v\\n", err)
            return
        }
        
        var result CreateKeyResponse
        if err := json.Unmarshal(body, &result); err != nil {
            fmt.Printf("Error parsing response: %v\\n", err)
            return
        }
        
        fmt.Printf("API Key: %s\\n", result.APIKey)
    } else {
        fmt.Printf("Error: %d\\n", resp.StatusCode)
    }
}`,
};

const CreateApiKeyPage = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState("cURL");
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [validationError, setValidationError] = useState("");

  const syntaxStyle = theme === "dark" ? vscDarkPlus : docco;

  const handleCopy = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const handleSend = async () => {
    if (!userId.trim()) {
      setValidationError("Please enter a user ID");
      return;
    }

    setIsLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch(
        "https://udemy-apim.azure-api.net/api/create-api-key",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ user_id: userId }),
        },
      );

      const data = await res.json();

      setResponse({
        code: res.status,
        body: data,
        headers: {
          "content-type": res.headers.get("content-type"),
          date: res.headers.get("date"),
          server: res.headers.get("server"),
        },
      });
    } catch (err: any) {
      setError({
        message: err.message,
        type: err.name,
        stack: err.stack,
        possibleCauses: [
          "Network connectivity issues",
          "API endpoint is unreachable",
          "Server is down",
        ],
        suggestions: [
          "Check if the API endpoint is correct",
          "Verify network connectivity",
          "Try again in a few moments",
        ],
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative lg:gap-10 xl:grid xl:grid-cols-[1fr_500px]">
      <div className="mx-auto">
        <div className="prose prose-invert mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="mb-4 text-4xl font-bold">Create API Key</h1>
            <p className="mb-8 text-xl">
              Generate a new API key for accessing the course creation
              endpoints.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-muted p-6 dark:bg-gray-800/50">
                <div className="mb-6 flex items-center space-x-2">
                  <span className="rounded bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                    POST
                  </span>
                  <code className="dark:text-gray-300">
                    /api/create-api-key
                  </code>
                  <button
                    className={cn(
                      "ml-auto rounded-lg px-6 py-2 text-white transition-colors",
                      isLoading
                        ? "cursor-not-allowed bg-gray-700"
                        : "bg-indigo-600 hover:bg-indigo-700",
                    )}
                    onClick={handleSend}
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="mb-2 block text-gray-400">
                      User ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={userId}
                      onChange={(e) => {
                        setUserId(e.target.value);
                        setValidationError("");
                      }}
                      placeholder="Enter user ID"
                      className={cn(
                        "w-full rounded-lg border px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900/50",
                        validationError ? "border-red-500" : "border-gray-700",
                      )}
                    />
                    {validationError && (
                      <p className="mt-2 text-sm text-red-500">
                        {validationError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Response Section */}
              {response && (
                <div className="overflow-hidden rounded-lg bg-muted dark:bg-gray-800/50">
                  <div className="flex items-center justify-between border-b border-gray-700 p-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-medium">Response</h2>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          response.code >= 200 && response.code < 300
                            ? "text-emerald-400"
                            : "text-red-400",
                        )}
                      >
                        {response.code}
                      </span>
                    </div>
                  </div>

                  <div className="border-b border-gray-700 p-4">
                    <h3 className="mb-2 text-sm font-medium">Response body</h3>
                    <pre className="overflow-x-auto rounded p-4 font-mono text-sm dark:bg-gray-900 dark:text-gray-300">
                      {JSON.stringify(response.body, null, 2)}
                    </pre>
                  </div>

                  <div className="p-4">
                    <h3 className="mb-2 text-sm font-medium dark:text-gray-400">
                      Response headers
                    </h3>
                    <pre className="overflow-x-auto rounded p-4 font-mono text-sm dark:bg-gray-900">
                      {Object.entries(response.headers)
                        .filter(([_, value]) => value)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join("\n")}
                    </pre>
                  </div>
                </div>
              )}

              {/* Error Section */}
              {error && (
                <div className="rounded-lg border border-red-900/50 bg-red-300 p-6 dark:bg-red-900/20">
                  <h3 className="mb-4 text-lg font-medium text-red-400">
                    Error Details
                  </h3>
                  <div className="space-y-4 text-sm text-gray-300">
                    <div>
                      <span className="text-red-400">Message:</span>
                      <p>{error.message}</p>
                    </div>
                    <div>
                      <span className="text-red-400">Type:</span>
                      <p>{error.type}</p>
                    </div>
                    {error.stack && (
                      <div>
                        <span className="text-red-400">Stack Trace:</span>
                        <pre className="mt-2 overflow-x-auto rounded-lg bg-gray-900/50 p-4">
                          {error.stack}
                        </pre>
                      </div>
                    )}
                    {error.possibleCauses && (
                      <div>
                        <span className="text-red-400">Possible Causes:</span>
                        <ul className="mt-2 list-inside list-disc">
                          {error.possibleCauses.map(
                            (cause: string, i: number) => (
                              <li key={i}>{cause}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                    {error.suggestions && (
                      <div>
                        <span className="text-red-400">Suggestions:</span>
                        <ul className="mt-2 list-inside list-disc">
                          {error.suggestions.map(
                            (suggestion: string, i: number) => (
                              <li key={i}>{suggestion}</li>
                            ),
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hidden border-l-2 px-2 text-sm xl:block">
        <div className="sticky top-32 mt-2 h-[calc(100vh-3.5rem)]">
          <div className="no-scrollbar h-full overflow-auto pb-10">
            <div className="flex space-x-2">
              {["cURL", "Python", "JavaScript", "PHP", "Go"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveTab(lang)}
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                    activeTab === lang
                      ? "bg-indigo-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                  )}
                >
                  {lang}
                </button>
              ))}
            </div>
            <div className="space-y-6 p-6">
              {/* Request Example */}
              <div className="relative">
                <div className="absolute right-3 top-3">
                  <button
                    onClick={() =>
                      handleCopy(
                        codeExamples[activeTab as keyof typeof codeExamples],
                        "request",
                      )
                    }
                    className="rounded-md p-2 transition-colors hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800"
                  >
                    <Copy
                      className={`h-4 w-4 ${
                        copiedEndpoint === "request"
                          ? "text-green-400"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
                <SyntaxHighlighter
                  language={
                    activeTab === "cURL" ? "bash" : activeTab.toLowerCase()
                  }
                  style={syntaxStyle}
                  customStyle={{
                    background:
                      theme === "dark" ? "rgb(17 24 39 / 0.5)" : "#f5f5f5",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border:
                      theme === "dark"
                        ? "1px solid rgb(31 41 55)"
                        : "1px solid #ddd",
                  }}
                >
                  {codeExamples[activeTab as keyof typeof codeExamples]}
                </SyntaxHighlighter>
              </div>

              {/* Response Example */}
              <div>
                <h3 className="mb-3 text-sm font-medium text-gray-400">
                  Example Response
                </h3>
                <div className="relative">
                  <div className="absolute right-3 top-3">
                    <button
                      onClick={() =>
                        handleCopy(
                          JSON.stringify(
                            {
                              api_key: "sk_test_abc123xyz456...",
                            },
                            null,
                            2,
                          ),
                          "example",
                        )
                      }
                      className="rounded-md p-2 transition-colors hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800"
                    >
                      <Copy
                        className={`h-4 w-4 ${
                          copiedEndpoint === "example"
                            ? "text-green-400"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language="json"
                    style={syntaxStyle}
                    customStyle={{
                      background:
                        theme === "dark" ? "rgb(17 24 39 / 0.5)" : "#f5f5f5",
                      padding: "1rem",
                      borderRadius: "0.5rem",
                      border:
                        theme === "dark"
                          ? "1px solid rgb(31 41 55)"
                          : "1px solid #ddd",
                    }}
                  >
                    {JSON.stringify(
                      {
                        api_key: "sk_test_abc123xyz456...",
                      },
                      null,
                      2,
                    )}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateApiKeyPage;
