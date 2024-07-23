import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import StoryCard from '@/components/StoryCard';
import SkeletonLoader from '@/components/SkeletonLoader';

const fetchTopStories = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
  const storyIds = await response.json();
  const top100Ids = storyIds.slice(0, 100);
  
  const storyPromises = top100Ids.map(id =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json())
  );
  
  return Promise.all(storyPromises);
};

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: stories, isLoading, error } = useQuery({
    queryKey: ['topStories'],
    queryFn: fetchTopStories
  });

  const filteredStories = stories?.filter(story =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Hacker News Top Stories</h1>
      <Input
        type="text"
        placeholder="Search stories..."
        className="mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Card className="p-6">
        {isLoading ? (
          <SkeletonLoader count={10} />
        ) : (
          filteredStories?.map(story => (
            <StoryCard key={story.id} story={story} />
          ))
        )}
      </Card>
    </div>
  );
};

export default Index;