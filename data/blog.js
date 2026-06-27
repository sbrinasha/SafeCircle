const blog_data = [
    {
        id: 1,
        title: "How to Identify Common Phishing Scams",
        content: "Learn the warning signs of phishing emails and how to protect yourself.<br>Phishing attacks are increasingly sophisticated, targeting both individuals and businesses.<br>Never click on suspicious links or provide personal information to unverified sources.",
        image: "img/blog-1.webp"
    },
    {
        id: 2,
        title: "SafeCircle Community Event - June 2026",
        content: "Join us for our monthly safety workshop where experts discuss digital security trends.<br>This month we're covering mobile app security and password management best practices.<br>Register now to secure your spot - limited seats available!",
        image: "img/blog-2.jpg"
    },
    {
        id: 3,
        title: "Protecting Your Circle from Investment Scams",
        content: "Investment fraud targeting families is on the rise. Here's what you need to know.<br>Always verify investment opportunities through official channels and licensed advisors.<br>Share this guide with your circle members to keep everyone informed and protected.",
        image: "img/blog-3.webp"
    }
];

function get_blog_by_id(id) {
    return blog_data.find(blog => blog.id === id);
}

function truncate_content(content, max_words = 20) {
    const text = content.replace(/<br>/g, ' ');
    const words = text.split(/\s+/);
    if (words.length > max_words) {
        return words.slice(0, max_words).join(' ') + '...';
    }
    return text;
}
