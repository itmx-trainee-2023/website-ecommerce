"use client"
import SignIn from './signin/page';
import { useState, useEffect } from 'react';

interface HomePageProps {
  isFirstVisit: boolean;
}



export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  useEffect(() => {
    // ตรวจสอบว่ามีคุกกี้ 'visited'ไหม
    const visited = document.cookie.includes('visited=true');

    if (!visited) {
      // ถ้าไม่มีคุกกี้ 'visited' ให้ตั้งค่าคุกกี้และปรับ state
      document.cookie = 'visited=true; max-age=5'; 
      setIsFirstVisit(true);
    } else {
      setIsFirstVisit(false);
    }
  }, []);
  return (
    <div>
       {isFirstVisit && <div>แถบ A</div>}
      <SignIn/>
    </div>
  );

  
}

