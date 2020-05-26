"""empty message

Revision ID: 9dfb0d7bd4ac
Revises: 4243898e7978
Create Date: 2020-05-26 19:00:13.553683

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9dfb0d7bd4ac'
down_revision = '4243898e7978'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('plUser', 'location')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('plUser', sa.Column('location', sa.VARCHAR(length=64), autoincrement=False, nullable=True))
    # ### end Alembic commands ###
