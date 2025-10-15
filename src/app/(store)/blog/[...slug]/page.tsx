import BlogDetailView from '@/modules/blogs/BlogDetailView';

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function page({ params }: PageProps) {
  const { slug } = await params;
  console.log(slug);

  return <BlogDetailView />;
}
