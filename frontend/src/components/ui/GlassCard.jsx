/**
 * GlassCard component for glass-morphism card styling
 * Replaces 4+ hardcoded glass-card patterns
 */

function GlassCard({
  children,
  className = "",
  padding = "p-5 sm:p-6",
  rounded = "rounded-2xl",
  border = "border-app-outline/20",
}) {
  return (
    <div
      className={`glass-card ${padding} ${rounded} border ${border} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default GlassCard;
