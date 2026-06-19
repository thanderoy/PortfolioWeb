# Personal Website
Personal Portfolio Website.
Built with Django.
Hosted on Railway.

## Development

Dependencies are managed with [uv](https://docs.astral.sh/uv/).

```bash
uv sync                       # create .venv and install locked dependencies
uv run python manage.py check # verify the project
uv run python manage.py runserver
```

Production runs via the `Procfile`: `uv run gunicorn Portfolio.wsgi`.
