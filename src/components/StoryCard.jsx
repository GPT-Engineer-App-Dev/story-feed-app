import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowUpCircle, ExternalLink } from 'lucide-react';

const StoryCard = ({ story }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg">{story.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ArrowUpCircle className="mr-2 h-4 w-4 text-green-500" />
            <span>{story.score} points</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(story.url, '_blank')}
          >
            Read More
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;