"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Download } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { cn } from "@/lib/utils";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "next-themes";

const codeExamples = {
  cURL: `curl -X GET \\
  'https://udemy-apim.azure-api.net/api/download-csv/example.csv' \\
  -H 'accept: application/json' \\
  -H 'X-API-Key: your_api_key'`,

  Python: `import requests

api_key = 'your_api_key'
filename = 'example.csv'

url = f'https://udemy-apim.azure-api.net/api/download-csv/{filename}'
headers = {
    'accept': 'application/json',
    'X-API-Key': api_key
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    with open(filename, 'wb') as f:
        f.write(response.content)
    print(f"File downloaded: {filename}")
else:
    print(f'Error: {response.status_code}')`,

  JavaScript: `const apiKey = 'your_api_key';
const filename = 'example.csv';

fetch(\`https://udemy-apim.azure-api.net/api/download-csv/\${filename}\`, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'X-API-Key': apiKey
  }
})
.then(response => response.blob())
.then(blob => {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
})
.catch(error => console.error('Error:', error));`,

  PHP: `<?php
$api_key = 'your_api_key';
$filename = 'example.csv';

$ch = curl_init();

curl_setopt_array($ch, [
    CURLOPT_URL => "https://udemy-apim.azure-api.net/api/download-csv/$filename",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'accept: application/json',
        "X-API-Key: $api_key"
    ]
]);

$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

if ($httpcode === 200) {
    file_put_contents($filename, $response);
    echo "File downloaded: $filename\\n";
} else {
    echo "Error: $httpcode\\n";
}`,

  Go: `package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "os"
)

func main() {
    apiKey := "your_api_key"
    filename := "example.csv"
    
    client := &http.Client{}
    url := fmt.Sprintf("https://udemy-apim.azure-api.net/api/download-csv/%s", filename)
    
    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Printf("Error creating request: %v\\n", err)
        return
    }
    
    req.Header.Add("accept", "application/json")
    req.Header.Add("X-API-Key", apiKey)
    
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
        
        err = ioutil.WriteFile(filename, body, 0644)
        if err != nil {
            fmt.Printf("Error saving file: %v\\n", err)
            return
        }
        
        fmt.Printf("File downloaded: %s\\n", filename)
    } else {
        fmt.Printf("Error: %d\\n", resp.StatusCode)
    }
}`,
};

const DownloadCsvPage = () => {
  const { theme } = useTheme();

  const syntaxStyle = theme === "dark" ? vscDarkPlus : docco;
  const [activeTab, setActiveTab] = useState("cURL");
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");
  const [filename, setFilename] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [validationError, setValidationError] = useState("");
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleCopy = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const handleSend = async () => {
    // Reset states
    setValidationError("");
    setError(null);
    setResponse(null);
    setDownloadUrl(null);

    // Validate inputs
    if (!apiKey.trim()) {
      setValidationError("Please enter an API key");
      return;
    }
    if (!filename.trim()) {
      setValidationError("Please enter a filename");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(
        `https://udemy-apim.azure-api.net/api/download-csv/${filename}`,
        {
          method: "GET",
          headers: {
            accept: "application/json",
            "X-API-Key": apiKey,
          },
        },
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      setDownloadUrl(url);

      setResponse({
        code: res.status,
        headers: {
          "content-disposition": res.headers.get("content-disposition"),
          "content-length": res.headers.get("content-length"),
          "content-type": res.headers.get("content-type"),
          date: res.headers.get("date"),
          etag: res.headers.get("etag"),
          "last-modified": res.headers.get("last-modified"),
          server: res.headers.get("server"),
        },
      });
    } catch (err: any) {
      setError({
        message: err.message,
        type: err.name,
        stack: err.stack,
        possibleCauses: [
          "Invalid API key",
          "Invalid filename",
          "File not found",
          "Network connectivity issues",
        ],
        suggestions: [
          "Check if your API key is valid",
          "Verify the filename is correct",
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
            <h1 className="mb-4 text-4xl font-bold">Download CSV</h1>
            <p className="mb-8 text-xl dark:text-gray-400">
              Download generated questions in CSV format.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-muted p-6 dark:bg-gray-800/50">
                <div className="mb-6 flex items-center space-x-2">
                  <span className="rounded bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400">
                    GET
                  </span>
                  <code className="">/api/download-csv/{"{filename}"}</code>
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
                    <label className="mb-2 block dark:text-gray-400">
                      API Key <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={apiKey}
                      onChange={(e) => {
                        setApiKey(e.target.value);
                        setValidationError("");
                      }}
                      placeholder="Enter your API key"
                      className={cn(
                        "w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900/50 dark:text-gray-300",
                        validationError && !apiKey
                          ? "border-red-500"
                          : "border-gray-700",
                      )}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block dark:text-gray-400">
                      Filename <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={filename}
                      onChange={(e) => {
                        setFilename(e.target.value);
                        setValidationError("");
                      }}
                      placeholder="e.g., example.csv"
                      className={cn(
                        "w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-900/50 dark:text-gray-300",
                        validationError && !filename
                          ? "border-red-500"
                          : "border-gray-700",
                      )}
                    />
                  </div>

                  {validationError && (
                    <p className="text-sm text-red-500">{validationError}</p>
                  )}
                </div>
              </div>

              {/* Response Section */}
              {response && (
                <div className="overflow-hidden rounded-lg bg-muted dark:bg-gray-800/50">
                  <div className="flex items-center justify-between border-b border-gray-700 p-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-lg font-medium dark:text-gray-300">
                        Response
                      </h2>
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

                  {downloadUrl && (
                    <div className="border-b border-gray-700 p-4">
                      <h3 className="mb-4 text-sm font-medium">
                        Download File
                      </h3>
                      <a
                        href={downloadUrl}
                        download={filename}
                        className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download CSV
                      </a>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="mb-2 text-sm font-medium">
                      Response headers
                    </h3>
                    <pre className="overflow-x-auto rounded p-4 text-sm dark:bg-gray-900 dark:text-gray-300">
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
                <div className="rounded-lg border border-red-900/50 bg-red-900/20 p-6">
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
      <div className="hidden h-full border-l-2 text-sm xl:block">
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
                    <Copy className={`h-4 w-4`} />
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
                      <Copy className={`h-4 w-4`} />
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

export default DownloadCsvPage;
