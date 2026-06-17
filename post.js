function getQueryParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

function showError(message) {
    document.getElementById("postTitle").textContent = "Post not found";
    document.getElementById("postDate").textContent = "";
    document.getElementById("postContent").innerHTML = "";
    document.getElementById("errorMessage").textContent = message;
}

function stripFrontMatter(text) {
    const frontmatter = text.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
    if (!frontmatter) {
        return { content: text, metadata: {} };
    }

    const metadata = {};
    const entries = frontmatter[1].split(/\n+/);

    for (const entry of entries) {
        const [key, ...rest] = entry.split(":");
        if (!key) continue;
        metadata[key.trim()] = rest.join(":").trim();
    }

    return {
        content: text.slice(frontmatter[0].length).trim(),
        metadata,
    };
}

async function loadPost() {
    const file = getQueryParam("file");
    if (!file) {
        showError("No blog post file specified.");
        return;
    }

    const sanitizedFile = file.replace(/[^a-zA-Z0-9_\-\.]/g, "");
    if (sanitizedFile !== file) {
        showError("Invalid blog post file.");
        return;
    }

    try {
        const response = await fetch(`posts/${sanitizedFile}`);
        if (!response.ok) {
            showError("Unable to load the blog post.");
            return;
        }

        const raw = await response.text();
        const { content, metadata } = stripFrontMatter(raw);

        document.title = metadata.title ? `${metadata.title} | Blog` : "Blog Post";
        document.getElementById("postTitle").textContent = metadata.title || "Untitled";
        document.getElementById("postDate").textContent = metadata.date || "";
        document.getElementById("postContent").innerHTML = marked.parse(content, {
            gfm: true,
            breaks: true
        });
    } catch (error) {
        showError("An error occurred while loading the post.");
        console.error(error);
    }
}

loadPost();
