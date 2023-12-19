import { useRouter } from 'next/router';

const SearchPage: React.FC = () => {
  const router = useRouter();
  const results = JSON.parse(router.query.results as string);

  // ตอนนี้ `results` จะเป็นข้อมูลที่คุณค้นหาได้

  return (
    <div>
      {results}
    </div>
  );
};

export default SearchPage;
