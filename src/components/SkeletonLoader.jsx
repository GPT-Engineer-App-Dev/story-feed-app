import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const SkeletonLoader = ({ count }) => {
  return Array(count)
    .fill()
    .map((_, index) => (
      <Card key={index} className="mb-4">
        <CardHeader>
          <Skeleton className="h-6 w-3/4" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-8 w-24" />
          </div>
        </CardContent>
      </Card>
    ));
};

export default SkeletonLoader;