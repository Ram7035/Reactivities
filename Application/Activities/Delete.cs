using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Delete
    {
        public class Command : IRequest
        {
            public Guid Id { get; set; }

            public void SetId(Guid id) => Id = Id;
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.Id);

                if (activity is null) throw new Exception("Activity not found");

                _context.Activities.Remove(activity);

                if (await _context.SaveChangesAsync() > 0) return Unit.Value;

                throw new Exception("Problem deleting activity");
            }
        }
    }
}