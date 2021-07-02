---
date: '2021-07-01'
title: 'Record'
categories: ['Web', 'SEO', 'Optimization']
summary: 'In this project Recording'
thumbnail: './Typescript_logo.png'
---

# Woongs personal Blog 🚀

---Make a personal blog---

## **Stack**

- Typescript
- React
- Gatsby
- GraphQL
- Styled Components

## 1. Gatsby Link API

```javascript
<Link to="/info">To Info</Link>
```

1. better than render speed below.
2. Link API is pre-render resource.
3.

```javascript
<a href="/info">To Info</a>
```

## 2. Use memo Category List

```javascript
const categoryList = useMemo(
  () =>
    edges.reduce(
      (
        list: CategoryListProps['categoryList'],
        {
          node: {
            frontmatter: { categories },
          },
        }: PostType,
      ) => {
        categories.forEach(category => {
          if (list[category] === undefined) list[category] = 1;
          else list[category]++;
        });

        list['All']++;

        return list;
      },
      { All: 0 },
    ),
  [],
);
```

## 3. Matching between Category and Post data

```javascript
const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  );
```

## 4. Markdown contetn parse

```javascript
const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};
```

**dangerouslySetInnerHTML Spec**

```javascript
interface DOMAttributes<T> {
        children?: ReactNode;
        dangerouslySetInnerHTML?: {
            __html: string;
        };
```
