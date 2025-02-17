'use client';

import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, Divider } from '@heroui/react';

export default function ResumeDisplay() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    // Replace this with the actual path to your resume PDF
    setPdfUrl('Onkar Dhillon - Resume.pdf');
  }, []);

  return (
    <div className="p-10">
      {/* Resume Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">My Resume</h2>
      </div>

      <div className="flex justify-center mb-10">
        <Card className="max-w-[800px] w-full">
          <CardHeader>
            <h4 className="font-bold text-lg text-gray-800">Resume</h4>
          </CardHeader>
          <Divider />
          <CardBody>
            {pdfUrl ? (
              <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                <Viewer fileUrl={pdfUrl} />
              </Worker>
            ) : (
              <p>Loading resume...</p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
